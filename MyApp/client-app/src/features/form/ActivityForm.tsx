import React, { ReactElement } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../app/models/activity";

interface Props {
  activity: IActivity | undefined;
  closeForm: () => void;
}

function ActivityForm({ activity, closeForm }: Props) {
  return (
    <>
      <Segment clearing>
        <Form>
          <Form.Input placeholder="Title" />
          <Form.TextArea placeholder="Category" />
          <Form.Input placeholder="Description" />
          <Form.Input placeholder="Date" />
          <Form.Input placeholder="City" />
          <Form.Input placeholder="Venus" />
          <Button
            floated="right"
            positive
            type="submit"
            content="Submit"
          ></Button>
          <Button
            onClick={closeForm}
            floated="right"
            type="button"
            content="Cancel"
          ></Button>
        </Form>
      </Segment>
    </>
  );
}

export default ActivityForm;
