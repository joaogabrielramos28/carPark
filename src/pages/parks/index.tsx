import React from "react";
import { Header, Loading } from "../../components";
import { ParkCard } from "../../components";
import {
  Container,
  NoParks,
  ContainerNoParks,
} from "../../styles/pages/parks/styles";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { database } from "../../services/firebase";
import { GetServerSideProps, GetStaticProps } from "next";
import theme from "../../styles/theme";

interface IParkProps extends DocumentData {
  id: string;
}

const Parks = ({ parks }: IParkProps) => {
  return (
    <Container>
      <Header />
      {parks.length === 0 && (
        <ContainerNoParks>
          <NoParks>Não foi encontrado nenhum park {":("} </NoParks>
          <Loading size={100} color={theme.colors.secondary} />
        </ContainerNoParks>
      )}
      {parks.map((park: IParkProps) => (
        <ParkCard
          key={park.id}
          locale={park.locale}
          bikeSpot={park.bikeSpot}
          carSpot={park.carSpot}
          name={park.name}
          period={park.period}
          price={park.price}
          rating={park.rating}
          truckSpot={park.truckSpot}
          image={park.image}
        />
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const q = query(collection(database, "parks"));

  const res = await getDocs(q);
  const parksResults: IParkProps[] = res.docs.map((doc: IParkProps) => {
    const data = doc.data() as DocumentData;
    doc = {
      id: doc.id,
      ...data,
    };

    return doc;
  });

  return {
    props: {
      parks: parksResults,
    },
  };
};

export default Parks;
