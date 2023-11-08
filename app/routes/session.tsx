import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Form, Link as RemixLink, useLoaderData } from "@remix-run/react";
import { hookCloudflareEnv, hookSession } from "~/lib/hooks";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const { KV, HUBSPOT_CLIENT_ID, HUBSPOT_REDIRECT_URI } = hookCloudflareEnv(
    context.env,
  );
  const { getSession, commitSession } = hookSession(KV);
  const session = await getSession(request.headers.get("Cookie"));
  const kvListResult = await KV.list();

  const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CLIENT_ID}&redirect_uri=${encodeURI(
    HUBSPOT_REDIRECT_URI,
  )}&scope=crm.objects.contacts.read`;

  return json(
    {
      authUrl,
      session,
      id: session.id,
      hubspotAccessToken: session.get("hubspotAccessToken"),
      kvListResult,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

// export async function action({ request, context }: ActionFunctionArgs) {
//   assertCloudflareEnv(context.env);
//   const { getSession, commitSession } = warmUpSession(context.env.KV);
//   const session = await getSession(request.headers.get("Cookie"));
// }

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>Session</CardHeader>
      <CardBody className="flex flex-col gap-4">
        {!data.hubspotAccessToken && (
          <Link
            as={RemixLink}
            to={data.authUrl}
            color="foreground"
            underline="hover"
          >
            Authorize
          </Link>
        )}
        <Form method="POST">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}
