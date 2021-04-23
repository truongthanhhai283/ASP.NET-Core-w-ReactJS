import React, { ReactElement } from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "../dashboard/ActivityList";
import ActivityDetails from "./../../details/ActivityDetails";
import ActivityForm from "./../../form/ActivityForm";
import { useStore } from "./../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  activities: IActivity[];
  createOrEdit: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

//export default function ActivityDashboard({activities}: Props) {
export default observer(function ActivityDashboard({
  activities,
  deleteActivity,
  createOrEdit,
  submitting,
}: Props) {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <ActivityList
            activities={activities}
            deleteActivity={deleteActivity}
            submitting={submitting}
          />
        </Grid.Column>

        <Grid.Column width="6">
          {selectedActivity && !editMode && <ActivityDetails />}

          {editMode && (
            <ActivityForm createOrEdit={createOrEdit} submitting={submitting} />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
});
