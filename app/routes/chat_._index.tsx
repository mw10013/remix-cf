import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { chats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function loader({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const chats = await db
    .select()
    .from(chats)
    .orderBy(desc(chats.createdAt))
    .all();
  return { chats };
}

export async function action({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  await db.insert(chats).values({});
  return null;
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-md">
        <CardHeader>Chats</CardHeader>
        <CardBody className="flex flex-col gap-2">
          <form method="POST" className="flex flex-col gap-2">
            <Button type="submit" color="primary">
              New
            </Button>
          </form>
          <div></div>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
