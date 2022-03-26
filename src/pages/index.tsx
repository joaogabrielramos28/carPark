import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Container } from "./styles";
const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default Home;
