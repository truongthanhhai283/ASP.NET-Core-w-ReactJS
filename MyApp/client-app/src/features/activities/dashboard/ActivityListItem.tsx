import React, { SyntheticEvent, useState } from "react";
import { Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
import { IActivity } from "./../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "./../../../app/stores/store";

interface Props {
  activity: IActivity;
}

export default function ActivityListItem({ activity }: Props) {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <>
      <Item key={activity.id}>
        <Item.Content>
          <Item.Header as="a">{activity.title}</Item.Header>
          <br />
          <Item.Meta as="a">{activity.date}</Item.Meta>
          <br />
          <Item.Description as="a">
            {activity.description}
            <br />
            {activity.city}, {activity.venue}
          </Item.Description>
          <br />
          <Item.Extra>
            <Button
              floated="right"
              content="View"
              color="blue"
              as={Link}
              to={`/activities/${activity.id}`}
            />

            <Button
              onClick={(e) => handleActivityDelete(e, activity.id)}
              floated="right"
              content="Delete"
              color="red"
              loading={loading && target === activity.id}
              name={activity.id}
            />
            <Label basic content={activity.category} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </>
  );
}
