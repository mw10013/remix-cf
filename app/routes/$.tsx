export function loader() {
  return new Response("Not Found", {
    status: 404,
  });
}

/**
 * @see https://otiv.dev/blog/essential-remix-error-handling
 */
export default function Route() {
  return (
    <main className="p-8">
      <h1 className="text-lg font-semibold">Not Found</h1>
    </main>
  );
}
