// import { Nango } from "@nangohq/node";
// import type { GithubIssue } from '<path-to-nango-integrations>/models'
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { hookCloudflareEnv } from "~/lib/hooks";
import { assertResponseOk } from "~/lib/utils";

//   const nango = new Nango({ secretKey: env.NANGO_PUBLIC_KEY });
//   //   const result = await nango.getRecords<GithubIssue>({
//     providerConfigKey: "demo-github-integration",
//     connectionId: "test-connection-id",
//     model: "GithubIssue",
//   });

export async function loader({ context }: LoaderFunctionArgs) {
  const env = hookCloudflareEnv(context.env);

  const configResponse = await fetch("https://api.nango.dev/config", {
    headers: {
      Authorization: `Bearer ${env.NANGO_SECRET_KEY}`,
    },
  });
  await assertResponseOk(configResponse);
  const config = await configResponse.json();
  //   "configs": [
  //     {
  //       "unique_key": "demo-github-integration",
  //       "provider": "github"
  //     }
  //   ]

  const integrationResponse = await fetch(
    "https://api.nango.dev/config/demo-github-integration",
    {
      headers: {
        Authorization: `Bearer ${env.NANGO_SECRET_KEY}`,
      },
    },
  );
  await assertResponseOk(integrationResponse);
  const integration = await integrationResponse.json();
  //   "integration": {
  //     "config": {
  //       "unique_key": "demo-github-integration",
  //       "provider": "github",
  //       "syncs": [
  //         {
  //           "name": "github-issues",
  //           "created_at": "2023-11-10T19:42:45.315Z",
  //           "updated_at": "2023-11-10T19:42:45.315Z"
  //         }
  //       ],
  //       "actions": []
  //     }
  //   }

  const recordsResponse = await fetch(
    "https://api.nango.dev/sync/records?model=GithubIssue",
    {
      headers: {
        Authorization: `Bearer ${env.NANGO_SECRET_KEY}`,
        "Connection-Id": "test-connection-id",
        "Provider-Config-Key": "demo-github-integration",
      },
    },
  );
  await assertResponseOk(recordsResponse);
  const records = await recordsResponse.json();

  return json({ config, integration, records });
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
