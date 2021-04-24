import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" exact header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </Menu.Item>

          <Menu.Item as={NavLink} to="/activities" name="activities" />

          <Menu.Item>
            <Button
              as={NavLink}
              to="/createActivity"
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
