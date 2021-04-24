import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <Container style={{ marginTop: "7em" }}>
        HomePage
        <h3>
          Go to <Link to="/activities">activities</Link>
        </h3>
      </Container>
    </>
  );
}
