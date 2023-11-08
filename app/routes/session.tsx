import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link as RemixLink, useLoaderData } from "@remix-run/react";
import { hookCloudflareEnv, hookSession } from "~/lib/hooks";
import { assertResponseOk } from "~/lib/utils";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const { KV, HUBSPOT_CLIENT_ID, HUBSPOT_REDIRECT_URI } = hookCloudflareEnv(
    context.env,
  );
  const { getSession, commitSession } = hookSession(KV);
  const session = await getSession(request.headers.get("Cookie"));
  const kvListResult = await KV.list();

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
  })(session.get("hubspotAccessToken"));

  const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CLIENT_ID}&redirect_uri=${encodeURI(
    HUBSPOT_REDIRECT_URI,
  )}&scope=crm.objects.contacts.read`;

  return json(
    {
      session,
      contact,
      authUrl,
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
