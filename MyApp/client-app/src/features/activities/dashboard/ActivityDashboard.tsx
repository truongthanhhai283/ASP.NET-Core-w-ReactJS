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
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

//export default function ActivityDashboard({activities}: Props) {
export default function ActivityDashboard({
  activities,
  selectedActivity,
  deleteActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  submitting,
}: Props) {
  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}           
          />
        </Grid.Column>

        <Grid.Column width="6">
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}

          {editMode && (
            <ActivityForm
              closeForm={closeForm}
              activity={selectedActivity}
              createOrEdit={createOrEdit}
              submitting={submitting}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
