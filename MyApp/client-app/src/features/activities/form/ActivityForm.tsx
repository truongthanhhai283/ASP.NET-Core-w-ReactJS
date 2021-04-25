import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, FormField, Header, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { useHistory, useParams } from "react-router";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./../../../app/common/form/MyTextInput";
import MyTextArea from "./../../../app/common/form/MyTextArea";
import MySelectInput from "./../../../app/common/form/MySelectInput";
import { categoryOptions } from "./../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { IActivity } from "./../../../app/models/activity";

export default observer(function ActivityForm() {
  const history = useHistory();
  const { activityStore } = useStore();
  const {
    selectedActivity,
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState<IActivity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: null,
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    category: Yup.string().required("The activity category is required"),
    description: Yup.string().required("The activity description is required"),
    date: Yup.string().required("The activity date is required"),
    city: Yup.string().required("The activity city is required"),
    venue: Yup.string().required("The activity venue is required"),
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => {
        setActivity(activity!);
      });
    }
  }, [id, loadActivity]);

  if (loadingInitial) {
    return <LoadingComponent content="Loading..." />;
  }

  function handleFormSubmit(activity: IActivity) {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() => {
        history.push(`/activities/${newActivity.id}`);
      });
    } else {
      updateActivity(activity).then(() =>
        history.push(`/activities/${activity.id}`)
      );
    }
  }

  // function handleInputChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value } = event.target;
  //   setActivity({ ...activity, [name]: value });
  // }

  return (
    <>
      <Segment clearing>
        <Header content="Activity Details" sub color="teal" />
        <Formik
          validationSchema={validationSchema}
          enableReinitialize
          initialValues={activity}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form
              className="ui form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <MyTextInput name="title" placeholder="Title" />

              <MySelectInput
                options={categoryOptions}
                placeholder="Category"
                name="category"
              />
              <MyTextArea
                rows={3}
                placeholder="Description"
                name="description"
              />
              <MyDateInput
                placeholderText="Date"
                name="date"
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <Header content="Location Details" sub color="teal" />
              <MyTextInput placeholder="City" name="city" />
              <MyTextInput placeholder="Venue" name="venue" />
              <Button
                disabled={isSubmitting || !dirty || !isValid}
                loading={loading}
                floated="right"
                positive
                type="submit"
                content="Submit"
              />

              <Button
                as={Link}
                to="/activities"
                floated="right"
                type="button"
                content="Cancel"
              ></Button>
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
});
