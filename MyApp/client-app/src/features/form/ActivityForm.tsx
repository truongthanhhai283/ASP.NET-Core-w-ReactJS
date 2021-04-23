import React, { ChangeEvent, ReactElement, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../app/models/activity";

interface Props {
  activity: IActivity | undefined;
  closeForm: () => void;
}

function ActivityForm({ activity: selectedActivity, closeForm }: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <>
      <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
          <Form.TextArea
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
            type="date"
          />
          <Form.Input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
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
