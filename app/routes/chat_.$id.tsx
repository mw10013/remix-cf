import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import invariant from "tiny-invariant";
import { Chats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function loader({ params, context }: LoaderFunctionArgs) {
  invariant(params.id, "invalid id");
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const chats = await db
    .select()
    .from(Chats)
    .where(eq(Chats.id, Number(params.id)));

  if (chats.length !== 1) {
    throw new Error("invalid chat");
  }
  return { chat: chats[0] };
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-2">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
