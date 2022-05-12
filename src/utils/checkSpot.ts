import { ISpotsProps } from "types/Parks";
import theme from "../styles/theme";

export const checkSpot = (
  spotType: String,
  spots?: ISpotsProps[],
  singleSpot?: ISpotsProps
): string => {
  if (spots?.length === 0) {
    return singleSpot?.checked
      ? theme.colors.success
      : theme.colors.title_light;
  }
  const spot = spots?.find((spot: ISpotsProps) => spot.name === spotType);

  return spot?.checked ? theme.colors.success : theme.colors.title_light;
};
