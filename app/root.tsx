import { NextUIProvider } from "@nextui-org/react";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import styles from "./tailwind.css";
import {
  assertCloudflareEnv,
  CloudflareBrowserEnv,
} from "./types/cloudflareEnv";

export const meta: MetaFunction = () => {
  // https://remix.run/docs/en/main/route/meta-v2#avoid-meta-in-parent-routes
  return [
    { title: "Remix-Cf" },
    {
      name: "description",
      content: "This app runs on Cloudflare.",
    },
  ];
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function loader({ context }: LoaderFunctionArgs) {
  assertCloudflareEnv(context.env);
  const { ENVIRONMENT } = context.env;
  const cloudflareBrowserEnv: CloudflareBrowserEnv = {
    ENVIRONMENT,
  };
  return json({ cloudflareBrowserEnv });
}

export default function App() {
  const { cloudflareBrowserEnv } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        {/* https://remix.run/docs/en/main/route/meta#global-meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          {/* Set up environment before scripts so that scripts can use. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.namewave = ${JSON.stringify(
                cloudflareBrowserEnv,
              )}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}

/**
 * Refer to https://remix.run/docs/en/main/guides/errors#root-error-boundary about Meta, Links, and Scripts.
 */
export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background font-sans text-foreground antialiased light">
        <div className="mx-auto max-w-sm p-8">
          {isRouteErrorResponse(error) ? (
            <>
              <h1 className="text-lg font-semibold">
                {error.status} {error.statusText}
              </h1>
              <p>{error.data}</p>
            </>
          ) : error instanceof Error ? (
            <>
              <h1 className="text-lg font-semibold">{error.name}</h1>
              <p className="">{error.message}</p>
              <p className="mt-2">The stack trace is:</p>
              <pre className="text-small text-default-500">{error.stack}</pre>
            </>
          ) : (
            <h1 className="text-lg font-semibold">Unknown Error</h1>
          )}
        </div>
        <Scripts />
      </body>
    </html>
  );
}
