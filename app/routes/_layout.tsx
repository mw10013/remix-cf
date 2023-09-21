import { isRouteErrorResponse, Outlet, useRouteError } from "@remix-run/react";

/**
 * Passthru to Outlet.
 * Exists for ErrorBoundary.
 * @returns
 */
export default function Route() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
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
  );
}
