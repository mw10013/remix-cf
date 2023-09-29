import { useChat } from "ai/react";

export default function Route() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/langchain",
  });

  return (
    <main className="mx-auto flex h-screen w-full max-w-lg flex-col overflow-auto p-24">
      <section className="m mb-auto">
        {messages.map((m) => (
          <div className="mb-4" key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </section>
      <form
        className="fixed bottom-0 flex space-x-4 p-4"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md p-2 text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="rounded-md border-2 border-solid border-white p-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
