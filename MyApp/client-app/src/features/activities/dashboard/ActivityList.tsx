import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityStore from "./../../../app/stores/activityStore";
import { useStore } from "./../../../app/stores/store";

interface Props {
  activities: IActivity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

function ActivityList({ activities, deleteActivity, submitting }: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  const { activityStore } = useStore();
  return (
    <>
      <Segment>
        <Item.Group divided>
          {activities.map((activity) => (
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
                    onClick={() => activityStore.selectActivity(activity.id)}
                  />

                  <Button
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    floated="right"
                    content="Delete"
                    color="red"
                    loading={submitting && target === activity.id}
                    name={activity.id}
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}

export default ActivityList;
