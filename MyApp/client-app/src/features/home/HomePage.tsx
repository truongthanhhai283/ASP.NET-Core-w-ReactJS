import { Observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "./../activities/dashboard/ActivityDashboard";

interface Props {}

export default function HomePage() {
  return (
    <>
      <Container style={{ marginTop: "7em" }}>
        HomePage
      </Container>
    </>
  );
}
