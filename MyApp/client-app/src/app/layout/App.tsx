import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../layout/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "./../stores/store";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router";
import HomePage from "./../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "./../../features/errors/TestError";
import { ToastContainer } from "react-toastify";

function App() {
  const { activityStore } = useStore();
  const location = useLocation();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />

            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
              <Route path="/errors" component={TestErrors} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
