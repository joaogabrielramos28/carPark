import { ISpotsProps } from "../components/ParkCard/types";
import theme from "../styles/theme";

export const checkSpot = (spotType: String, spots: ISpotsProps[]): string => {
  const spot = spots?.find((spot: ISpotsProps) => spot.name === spotType);

  return spot?.checked ? theme.colors.success : theme.colors.title_light;
};
