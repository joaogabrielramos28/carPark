import { createStore } from "redux";
import { combineReducers } from "redux";
import { IParkProps } from "../pages/parks";
import parks from "./parks/parks.reducer";
import { createWrapper } from "next-redux-wrapper";
export interface IState {
  parks: IParkProps;
}

const reducers = combineReducers({
  parks,
});

const makeStore = () => createStore(reducers);

export const wrapper = createWrapper(makeStore, { debug: false });
