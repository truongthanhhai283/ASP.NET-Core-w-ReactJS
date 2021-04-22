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
  deleteActivity: (id: string) => void;
}

//export default function ActivityDashboard({activities}: Props) {
export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  deleteActivity,
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
            <ActivityForm activity={selectedActivity} closeForm={closeForm} />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
