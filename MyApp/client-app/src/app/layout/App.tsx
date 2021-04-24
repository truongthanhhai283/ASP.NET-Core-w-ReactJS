import React, { useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import Navbar from "../layout/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "./../stores/activityStore";
import { useStore } from "./../stores/store";
import { observer } from "mobx-react-lite";
import { Route } from "react-router";
import HomePage from "./../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <>
      <Navbar />

      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
