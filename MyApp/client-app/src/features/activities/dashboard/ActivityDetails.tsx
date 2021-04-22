import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface Props {
  activity: IActivity;
}

function ActivityDetails({ activity }: Props) {
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
            <Button basic color="blue" content="Edit" />
            <Button basic color="grey" content="Cancel" />
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}

export default ActivityDetails;