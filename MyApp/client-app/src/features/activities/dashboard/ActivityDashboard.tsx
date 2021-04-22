import React, { ReactElement } from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "../dashboard/ActivityList";

interface Props {
  activities: IActivity[];
}

//export default function ActivityDashboard({activities}: Props) {
export default function ActivityDashboard({ activities }: Props) {
  return (
    <>
      <Grid with="10">
        <ActivityList activities={activities} />
      </Grid>
    </>
  );
}
