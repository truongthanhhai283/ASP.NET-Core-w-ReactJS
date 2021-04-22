import React, { ReactElement } from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "../dashboard/ActivityList";
import ActivityDetails from "./../../details/ActivityDetails";
import ActivityForm from "./../../form/ActivityForm";

interface Props {
  activities: IActivity[];
  selectedActivity: IActivity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}

//export default function ActivityDashboard({activities}: Props) {
export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}: Props) {
  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid.Column>

        <Grid.Column width="6">
          {selectedActivity && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
            />
          )}

          <ActivityForm />
        </Grid.Column>
      </Grid>
    </>
  );
}
