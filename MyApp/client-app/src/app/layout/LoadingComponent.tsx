import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

interface Props {
  inverted?: boolean;
  content?: string;
}

function LoadingComponent({ inverted = true, content = "Loading..." }: Props) {
  return (
    <>
      <Dimmer active={true} inverted={inverted}>
        <Loader content={content} />
      </Dimmer>

      <Image src="/images/wireframe/short-paragraph.png" />
    </>
  );
}

export default LoadingComponent;
