import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import Navbar from "../layout/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const [selectedActivity, setSelectedActivity] = useState<
    IActivity | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);

        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <>
      <Navbar />

      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </>
  );
}

export default App;
