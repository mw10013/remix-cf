import { NextUIProvider } from "@nextui-org/react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import styles from "./tailwind.css";

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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
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
