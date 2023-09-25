import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function Route() {
  const [text, setText] = useState("");
  return (
    <>
      <Card className="m-8 mx-auto max-w-md">
        <CardBody className="h-48 overflow-visible">
          <p>{text}</p>
        </CardBody>
      </Card>
      <Card className="fixed right-2 top-2">
        <CardBody>
          <Button
            disableRipple
            onPress={() => {
              setText((t) => t + " " + faker.lorem.sentence());
            }}
          >
            Lorem
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
