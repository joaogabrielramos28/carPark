import { IParkProps } from "../../pages/parks";

export function fetchParks(parks: IParkProps[]) {
  return {
    type: "ADD_PARKS",
    payload: [...parks],
  };
}
