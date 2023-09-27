import * as React from "react";
import { faker } from "@faker-js/faker";
import { Button, Card, CardBody } from "@nextui-org/react";
import {
  useIntersectionObserver,
  useMeasure,
  useWindowScroll,
} from "@uidotdev/usehooks";

export default function Route() {
  const [text, setText] = React.useState("");
  // const rootRef = React.useRef<HTMLDivElement>(null);
  const [intersectionRef, entry] = useIntersectionObserver<HTMLDivElement>({
    // root: rootRef.current,
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [measureRef, { width, height }] = useMeasure<HTMLDivElement>();
  const [{ x, y }] = useWindowScroll();
  return (
    <>
      <Card className="m-8 mx-auto max-w-md">
        <CardBody id="cardBody" className="flex h-64 flex-col">
          <div
            id="scrollingElement"
            className="max-h-48 flex-grow overflow-y-auto border-1 border-blue-700"
          >
            <div id="content" className="m-2 border-1 border-orange-600">
              <div ref={measureRef}>{text}</div>
              <div
                id="purpleDiv"
                ref={intersectionRef}
                className="h-4 bg-purple-600"
              ></div>
            </div>
          </div>
          <div className="mt-2 h-4 bg-slate-500"></div>
        </CardBody>
      </Card>
      <Card className="fixed right-2 top-2">
        <CardBody>
          <Button
            variant="bordered"
            color="secondary"
            size="sm"
            disableRipple
            onPress={() => {
              setText(
                (t) => t + " " + faker.lorem.sentence({ min: 1, max: 10 }),
              );
            }}
          >
            Lorem
          </Button>
          <div>isIntersecting: {entry?.isIntersecting.toString()}</div>
          <div>intersectionRatio: {entry?.intersectionRatio}</div>
          <div>target.tagName: {entry?.target.tagName}</div>
          <div>target.className: {entry?.target.className}</div>
          <div>target.id: {entry?.target.id}</div>
          <div>width: {width}</div>
          <div>height: {height}</div>
          <div>x: {x}</div>
          <div>y: {y}</div>
        </CardBody>
      </Card>
    </>
  );
}
