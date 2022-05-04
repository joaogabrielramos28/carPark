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
import { IParkCardProps, ISpotsProps } from "./types";
import Link from "next/link";

const ParkCard = ({
  locale,
  name,
  spots,
  rating,
  price,
  period,
  id,
  images,
  main_image,
}: IParkCardProps) => {
  const checkSpot = (spotType: String): string => {
    const spot = spots?.find((spot: ISpotsProps) => spot.name === spotType);

    return spot?.checked ? "#00C977" : "#C4C4C4";
  };
  return (
    <Link href={`/parks/${id}`} passHref>
      <Container>
        <ParkWrapper>
          <ParkImage src={main_image ? main_image : "/placeholder.jpg"} />
        </ParkWrapper>

        <ParkInfoWrapper>
          <ParkAddress>{locale}</ParkAddress>
          <ParkName>{name}</ParkName>
          <ParkType>
            <FaCarSide color={checkSpot("car")} title="Carro" />
            <FaTruck color={checkSpot("truck")} title="Caminhão" />
            <RiMotorbikeFill color={checkSpot("bike")} title="Moto" />
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
    </Link>
  );
};
export default ParkCard;
