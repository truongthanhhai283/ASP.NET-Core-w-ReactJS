import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <>
      <Card fluid>
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span className="date">{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <a>
            <Icon name="user" />
            22 Friends
          </a> */}
          <Button.Group widths="2">
            <Button
              basic
              color="blue"
              content="Edit"
              onClick={() => openForm(activity.id)}
            />

            <Button
              basic
              color="grey"
              content="Cancel"
              onClick={cancelSelectedActivity}
            />
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}

export default ActivityDetails;
