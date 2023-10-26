export default function Route() {
  return (
    <div className="h-full border-1">
      <div className="mx-auto flex h-full max-w-xl flex-col gap-2 border-1 border-blue-500 p-2">
        <div className="">Flex</div>
        <div className="flex-grow bg-orange-400 p-2">
          <div className="overflow-y-auto">
            {Array(15)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="h-12 bg-blue-400">
                  {index}
                </div>
              ))}
          </div>
        </div>
        <div className="h-8 bg-purple-400"></div>
      </div>
    </div>
  );
}
