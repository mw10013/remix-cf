import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link as RemixLink, useLoaderData } from "@remix-run/react";
import { hookCloudflareEnv, hookHubspot, hookSession } from "~/lib/hooks";
import { assertResponseOk } from "~/lib/utils";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const env = hookCloudflareEnv(context.env);
  const { getSession, commitSession } = hookSession(env);
  const session = await getSession(request.headers.get("Cookie"));
  const { getAuthUrl, getAccessToken } = hookHubspot();
  const kvListResult = await env.KV.list();

  const contact = await (async (accessToken) => {
    if (!accessToken) {
      return null;
    }
    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/1?archived=false`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    await assertResponseOk(response);
    return await response.json();
  })(await getAccessToken({session, env}));

  return json(
    {
      session,
      contact,
      authUrl: getAuthUrl(env),
      kvListResult,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>Session</CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Link
          as={RemixLink}
          to={data.authUrl}
          color="foreground"
          underline="hover"
        >
          Authorize
        </Link>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}
