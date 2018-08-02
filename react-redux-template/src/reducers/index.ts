import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";

export interface ISignIn {
  username: string,
  password: string,
  errorMessage: string
}

export interface IState {
  signIn: ISignIn,
};

export const state = combineReducers<IState>({
  signIn: signInReducer,
});