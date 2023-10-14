import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/cloudflare";
import { Link as RemixLink, useLoaderData } from "@remix-run/react";
import { desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Trash2 } from "lucide-react";
import { Chats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function loader({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const chats = await db
    .select()
    .from(Chats)
    .orderBy(desc(Chats.createdAt))
    .all();
  return { chats };
}

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const [{ id }] = await db
    .insert(Chats)
    .values({})
    .returning({ id: Chats.id });
  console.log("chat index: action: id:", id);
  return redirect(`/chat/${id}`);
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
          <div>
            {data.chats.map((chat) => (
              <div key={chat.id} className="flex items-center justify-between">
                <Link
                  as={RemixLink}
                  to={`/chat/${chat.id}`}
                  color="foreground"
                  underline="hover"
                >
                  {chat.createdAt}
                </Link>
                <Button isIconOnly variant="light">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
