import type { NextPage } from "next";
import AppInfo from "../components/AppInfo";
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

      <AppInfo />
    </Container>
  );
};

export default Home;
