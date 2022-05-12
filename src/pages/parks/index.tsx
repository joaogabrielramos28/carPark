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
import { IPark } from "../../types/Parks";

const Parks = ({ parks }: DocumentData) => {
  return (
    <Container>
      <Header />
      {parks.length === 0 && (
        <ContainerNoParks>
          <NoParks>Não foi encontrado nenhum park {":("} </NoParks>
          <Loading size={100} color={theme.colors.secondary} />
        </ContainerNoParks>
      )}
      {parks.map((park: IPark) => (
        <ParkCard
          key={park.id}
          state={park.state}
          spots={park.spots}
          name={park.name}
          period={park.period}
          price={park.price}
          rating={park.rating}
          main_image={park.main_image}
          images={park.images}
          id={park.id}
        />
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const q = query(collection(database, "parks"));

  const res = await getDocs(q);
  const parksResults = res.docs.map((doc: DocumentData) => {
    const data = doc.data() as IPark;
    doc = {
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
