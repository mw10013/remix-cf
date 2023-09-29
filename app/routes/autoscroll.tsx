import { useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function Route() {
  const [text, setText] = useState("");

  return (
    <Card className="m-8 mx-auto max-w-md">
      <CardBody id="cardBody" className="flex h-64 flex-col gap-2">
        <div
          // https://code.hnldesign.nl/scrolltobottom/
          className="flex h-48 flex-col-reverse overflow-y-auto border-1 border-blue-700 p-2"
        >
          {text}
        </div>
        <Button
          color="primary"
          size="sm"
          onPress={() => {
            setText((t) => t + " fee fi fo fum eeney meeney miney moe");
          }}
        >
          Fee Fi Foo
        </Button>
      </CardBody>
    </Card>
  );
}
