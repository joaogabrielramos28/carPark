import type { NextPage } from "next";
import AppInfo from "../components/AppInfo/AppInfo";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InfoGroup from "../components/InfoGroup/InfoGroup";
import { Container, InfoGroupContainer } from "../styles/pages/home/styles";
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
