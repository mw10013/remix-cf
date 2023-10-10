import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function loader({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const db = context.env.RCF_DB;
  const result = await db.exec("select * from customers");
  return { result };
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <Card>
      <CardHeader>D1</CardHeader>
      <CardBody>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}
