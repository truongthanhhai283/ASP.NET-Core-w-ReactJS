import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IActivity } from "./../models/activity";

export default class ActivityStore {
  activities: IActivity[] = [];
  selectedActivity: IActivity | null = null;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadAvtivities = async () => {
    this.loadingInitial = true;

    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activities.push(activity);
      });
      this.loadingInitial = false;
    } catch (error) {
      console.log(error);
    }
  };
}
