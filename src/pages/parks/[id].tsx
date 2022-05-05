import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { BackButton, Carousel, Header } from "../../components";
import { IParkCardProps } from "../../components/ParkCard/types";
import { database } from "../../services/firebase";
import {
  Container,
  ParkHeader,
  ParkContent,
  ParkName,
  ParkWrapper,
  ParkPrice,
  ParkPeriod,
  ParkInfo,
  ParkAddress,
  ParkDetails,
  SpotsTypes,
  ScheduleSpot,
  ScheduleButton,
} from "../../styles/pages/parks/singlePark/styles";

import { useTheme } from "styled-components";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { checkSpot } from "../../utils/checkSpot";
import { AiFillClockCircle } from "react-icons/ai";

interface ParkProps {
  park: IParkCardProps;
}

const Park = ({ park }: ParkProps) => {
  const theme = useTheme();
  const { spots } = park;
  return (
    <>
      <Header />
      <ParkHeader>
        <BackButton />
      </ParkHeader>

      <Container>
        <ParkWrapper>
          <Carousel images={park.images!} />
          <ParkContent>
            <ParkInfo>
              <ParkName>{park.name}</ParkName>
              <ParkAddress>
                {park.address}, {park.state}{" "}
              </ParkAddress>
            </ParkInfo>
            <ParkPrice>
              R$ {park.price}
              <ParkPeriod>/{park.period}</ParkPeriod>
            </ParkPrice>
          </ParkContent>

          <ParkDetails>
            <SpotsTypes>
              <FaCarSide
                color={checkSpot("car", spots)}
                title="Carro"
                size={24}
              />
              <FaTruck
                color={checkSpot("truck", spots)}
                title="Caminhão"
                size={24}
              />
              <RiMotorbikeFill
                color={checkSpot("bike", spots)}
                title="Moto"
                size={24}
              />
            </SpotsTypes>
          </ParkDetails>

          <ScheduleSpot>
            <ScheduleButton>
              Agendar vaga{" "}
              <AiFillClockCircle color={theme.colors.shape} size={18} />
            </ScheduleButton>
          </ScheduleSpot>
        </ParkWrapper>
      </Container>
    </>
  );
};
export default Park;

export const getStaticPaths: GetStaticPaths = async () => {
  const q = query(collection(database, "parks"));

  const res = await getDocs(q);
  const parksResults = res.docs;

  const paths = parksResults.map((park) => {
    return {
      params: {
        id: park.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const q = query(collection(database, "parks"), where("id", "==", id));
  const res = await getDocs(q);
  const parkResult = res.docs[0].data() as IParkCardProps;

  return {
    props: {
      park: parkResult,
    },
    revalidate: 60 * 30, // 30 min
  };
};
