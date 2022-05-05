import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { IParkCardProps } from "../../components/ParkCard/types";
import { database } from "../../services/firebase";

interface ParkProps {
  park: IParkCardProps;
}

const Park = ({ park }: ParkProps) => {
  return (
    <div>
      <h1>{park.name}</h1>
    </div>
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
