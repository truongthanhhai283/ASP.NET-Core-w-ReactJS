import React, { ReactElement } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

interface Props {}

function ActivityForm({}: Props): ReactElement {
  return (
    <>
      <Segment clearing>
        <Form>
          <Form.Input placeholder="Title"/>
          <Form.TextArea placeholder="Category"/>
          <Form.Input placeholder="Description"/>
          <Form.Input placeholder="Date"/>
          <Form.Input placeholder="City"/>
          <Form.Input placeholder="Venus"/>
          <Button floated="right" positive type="submit" content="Submit"></Button>
          <Button floated="right" type="button" content="Cancel"></Button>
        </Form>
      </Segment>
    </>
  );
}

export default ActivityForm;
