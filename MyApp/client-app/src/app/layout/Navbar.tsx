import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "./../stores/store";

function Navbar() {
  const { activityStore } = useStore();

  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </Menu.Item>

          <Menu.Item name="activities" />

          <Menu.Item>
            <Button
              onClick={() => activityStore.openForm()}
              positive
              center
              content="Create activity"
            />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;
