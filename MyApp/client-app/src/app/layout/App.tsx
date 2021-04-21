import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import Navbar from "../layout/Navbar";

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
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
