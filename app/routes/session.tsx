import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  ActionFunctionArgs,
  createCookie,
  createWorkersKVSessionStorage,
  isSession,
  json,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Form, useLoaderData } from "@remix-run/react";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

function warmUpSession(kv: KVNamespace) {
  type SessionData = { count: number };
  type FlashData = { flashMessage: string };

  const sessionCookie = createCookie("__session", {
    secrets: ["r3m1xr0ck5"],
    sameSite: true,
    maxAge: 60,
  });

  const { getSession, commitSession, destroySession } =
    createWorkersKVSessionStorage<SessionData, FlashData>({
      kv,
      cookie: sessionCookie,
    });

  return { getSession, commitSession, destroySession };
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const { getSession, commitSession } = warmUpSession(context.env.KV);
  const session = await getSession(request.headers.get("Cookie"));
  session.set("count", (session.get("count") ?? 0) + 1);
  const kvListResult = await context.env.KV.list();

  return json(
    {
      session,
      hasCount: session.has("count"),
      isSession: isSession(session),
      kvListResult,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export async function action({ request, context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const { getSession, commitSession } = warmUpSession(context.env.KV);
  const session = await getSession(request.headers.get("Cookie"));
}

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>Session</CardHeader>
      <CardBody className="flex flex-col gap-4">
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
