import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "./../../../app/stores/store";

export default observer(function ActivityList() {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const {
    deleteActivity,
    activityByDate,
    loading,
  } = activityStore;

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <>
      <Segment>
        <Item.Group divided>
          {activityByDate.map((activity) => (
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
          ))}
        </Item.Group>
      </Segment>
    </>
  );
});
