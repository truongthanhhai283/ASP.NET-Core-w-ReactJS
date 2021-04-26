import { IUser, UserFormValue } from "./../models/user";
import { makeAutoObservable } from "mobx";
import agent from "./../api/agent";

export default class UserStore {
  user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getisLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValue) => {
    try {
      const user = await agent.Account.login(creds);
      console.log(user);
    } catch (error) {
      throw error;
    }
  };
}
