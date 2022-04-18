import { Reducer } from "redux";
import { IParkProps } from "../../pages/parks";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE: IParkProps[] = [];

const parks: Reducer<IParkProps[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "ADD_PARKS":
      return [...action.payload];
    default:
      return state;
  }
};

export default parks;
