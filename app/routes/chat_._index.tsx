import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/cloudflare";
import { Link as RemixLink, useFetcher, useLoaderData } from "@remix-run/react";
import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Trash2 } from "lucide-react";
import invariant from "tiny-invariant";
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

export async function action({ request, context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const formData = await request.formData();
  const intent = formData.get("intent");
  switch (intent) {
    case "new": {
      const [{ id }] = await db
        .insert(Chats)
        .values({})
        .returning({ id: Chats.id });
      return redirect(`/chat/${id}`);
    }
    case "delete": {
      const id = Number(formData.get("id"));
      invariant(!isNaN(id) && id !== 0, "invalid id");
      await db.delete(Chats).where(eq(Chats.id, id));
      return null;
    }
    default: {
      throw new Error("Invalid intent");
    }
  }
}

function ChatItem({
  chat,
}: {
  chat: Awaited<ReturnType<typeof loader>>["chats"][0];
}) {
  const fetcher = useFetcher();

  return (
    <div className="flex items-center justify-between">
      <Link
        as={RemixLink}
        to={`/chat/${chat.id}`}
        color="foreground"
        underline="hover"
      >
        {chat.createdAt}
      </Link>
      <fetcher.Form method="POST">
        <input type="hidden" name="id" value={chat.id} />
        <Button
          type="submit"
          name="intent"
          value="delete"
          isIconOnly
          variant="light"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </fetcher.Form>
    </div>
  );
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-md">
        <CardHeader>Chats</CardHeader>
        <CardBody className="flex flex-col gap-2">
          <form method="POST" className="flex flex-col gap-2">
            <Button type="submit" name="intent" value="new" color="primary">
              New
            </Button>
          </form>
          <div>
            {data.chats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </div>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
