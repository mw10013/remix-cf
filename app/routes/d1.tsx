import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useActionData, useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import invariant from "tiny-invariant";
import { users } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function loader({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const result = await db.select().from(users).all();
  return { result };
}

export async function action({ request, context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.RCF_DB);
  const formData = await request.formData();
  const name = formData.get("name");
  invariant(typeof name === "string" && name.length > 0, "name is invalid");
  const result = await db
    .insert(users)
    // .values({ name, email: `${name}@email.com` });
    .values({ name });
  return { result };
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-md">
        <CardHeader>D1</CardHeader>
        <CardBody>
          <form method="POST" className="flex flex-col gap-2">
            <Input type="text" label="Name" isRequired name="name" />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  );
}
