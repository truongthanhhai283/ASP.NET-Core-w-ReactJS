import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import Navbar from "../layout/Navbar";
import ActivitiesDashboard from "./../../features/activities/dashboard/ActivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);

        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Container style={{ marginTop: "7em" }}>
        <ActivitiesDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
