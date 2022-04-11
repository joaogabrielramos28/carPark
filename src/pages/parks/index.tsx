import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { ParkCard } from "../../components";
import { Container } from "../../styles/pages/parks/styles";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { database } from "../../services/firebase";

interface IParkProps extends DocumentData {
  id: string;
}

const Parks = () => {
  const [parks, setParks] = useState([] as IParkProps[]);

  useEffect(() => {
    async function fetch() {
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

      setParks(parksResults);
    }

    fetch();
  }, []);

  console.log(parks);

  return (
    <Container>
      <Header />
      {parks.map((park) => (
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

export default Parks;
