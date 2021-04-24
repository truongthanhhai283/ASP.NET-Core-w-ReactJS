import React, { SyntheticEvent, useState } from "react";
import { Icon, Item, Segment } from "semantic-ui-react";
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
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="/assets/user.png" />
              <Item.Content>
                <Item.Header as={Link} to={`/activities/${activity.id}`}>
                  {activity.title}
                </Item.Header>
                <Item.Description>Hosted by Bob</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {activity.date}
            <Icon name="marker" /> {activity.venue}
          </span>
        </Segment>
        <Segment secondary>Attendees go here</Segment>
        <Segment clearing>
          <span>{activity.description}</span>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    </>
  );
}
