import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoGroup from "../components/InfoGroup";
import { Container, InfoGroupContainer } from "./styles";
const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <InfoGroupContainer>
        <InfoGroup />
      </InfoGroupContainer>
    </Container>
  );
};

export default Home;
