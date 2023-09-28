import * as React from "react";
import { faker } from "@faker-js/faker";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function Route() {
  const [text, setText] = React.useState("");

  // https://dev.to/martinez/real-scroll-for-a-chat-application-22co
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current === null) return;
    const { offsetHeight, scrollHeight, scrollTop } = containerRef.current;
    if (scrollHeight <= scrollTop + offsetHeight + 100) {
      containerRef.current.scrollTo(0, scrollHeight);
    }
  }, [containerRef, text]);

  return (
    <Card className="m-8 mx-auto max-w-md">
      <CardBody id="cardBody" className="flex h-64 flex-col gap-2">
        <div
          ref={containerRef}
          className="h-48 overflow-y-auto border-1 border-blue-700 p-2"
        >
          {text}
        </div>
        <Button
          color="primary"
          size="sm"
          onPress={() => {
            setText((t) => t + " " + faker.lorem.sentence({ min: 1, max: 10 }));
          }}
        >
          Lorem
        </Button>
      </CardBody>
    </Card>
  );
}