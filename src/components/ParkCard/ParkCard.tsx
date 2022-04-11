import React from "react";

import {
  Container,
  ParkWrapper,
  ParkImage,
  ParkInfoWrapper,
  ParkName,
  ParkAddress,
  ParkType,
  ParkWrapperPrice,
  ParkRating,
  ParkPrice,
  Period,
} from "./styles";

import { AiFillStar } from "react-icons/ai";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { IParkCardProps } from "./types";

const ParkCard = ({
  locale,
  name,
  carSpot,
  truckSpot,
  bikeSpot,
  rating,
  price,
  period,
  image,
}: IParkCardProps) => {
  const checkSpot = (spot: boolean): string => {
    return spot ? "#00C977" : "#C4C4C4";
  };
  return (
    <Container>
      <ParkWrapper>
        <ParkImage src={image ? image : "/placeholder.jpg"} />
      </ParkWrapper>

      <ParkInfoWrapper>
        <ParkAddress>{locale}</ParkAddress>
        <ParkName>{name}</ParkName>
        <ParkType>
          <FaCarSide color={checkSpot(carSpot)} title="Carro" />
          <FaTruck color={checkSpot(truckSpot)} title="Caminhão" />
          <RiMotorbikeFill color={checkSpot(bikeSpot)} title="Moto" />
        </ParkType>
        <ParkWrapperPrice>
          <ParkRating>
            <AiFillStar style={{ marginRight: "5px" }} color={"#F7373A"} />{" "}
            {rating}
          </ParkRating>
          <ParkPrice>
            R$ {price}
            <Period>/{period}</Period>
          </ParkPrice>
        </ParkWrapperPrice>
      </ParkInfoWrapper>
    </Container>
  );
};
export default ParkCard;
