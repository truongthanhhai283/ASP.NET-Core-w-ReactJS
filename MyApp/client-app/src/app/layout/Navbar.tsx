import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Reactive
          </Menu.Item>

          <Menu.Item name="activities" />

          <Menu.Item>
            <Button positive center content="Create activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;
