import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { IParkProps } from ".";
import { database } from "../../services/firebase";

const Park = ({ id }) => {
  return <div>{id}</div>;
};
export default Park;

export const getStaticPaths: GetStaticPaths = async () => {
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
  const { id } = params;

  return {
    props: { id },
    revalidate: 60 * 30, // 30 min
  };
};
