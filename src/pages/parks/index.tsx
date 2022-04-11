import React, { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import { ParkCard } from "../../components";
import { Container } from "../../styles/pages/parks/styles";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { database } from "../../services/firebase";
import { GetServerSideProps, GetStaticProps } from "next";

interface IParkProps extends DocumentData {
  id: string;
}

const Parks = ({ parks }: IParkProps) => {
  console.log(parks);

  if (parks.length === 0) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
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
