import React, { ReactElement } from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface Props {
  activities: IActivity[];
}

//export default function ActivitiesDashboard({activities}: Props) {
export default function ActivitiesDashboard(props: Props) {
  return (
    <>
      <Grid with="10">
        <List>
          {props.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Grid>
    </>
  );
}
