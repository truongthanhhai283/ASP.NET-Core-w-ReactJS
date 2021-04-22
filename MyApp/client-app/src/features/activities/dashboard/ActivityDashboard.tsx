import React, { ReactElement } from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "../dashboard/ActivityList";
import ActivityDetails from "./ActivityDetails";

interface Props {
  activities: IActivity[];
}

//export default function ActivityDashboard({activities}: Props) {
export default function ActivityDashboard({ activities }: Props) {
  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <ActivityList activities={activities} />
        </Grid.Column>

        <Grid.Column width="6">
          {activities[0] && <ActivityDetails activity={activities[0]} />}
        </Grid.Column>
      </Grid>
    </>
  );
}
