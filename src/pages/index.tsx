import type { NextPage } from "next";
import { AppMobile } from "components";
import AppInfo from "components/AppInfo/AppInfo";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import InfoGroup from "components/InfoGroup/InfoGroup";
import { Container, InfoGroupContainer } from "styles/pages/home/styles";
import ClientsApprove from "components/ClientsApprove/ClientsApprove";
const Home: NextPage = () => {
  return (
    <Container data-aos="fade-in">
      <Header />
      <Hero />

      <InfoGroupContainer>
        <InfoGroup />
      </InfoGroupContainer>

      <AppInfo />

      <ClientsApprove />

      <AppMobile />
    </Container>
  );
};

export default Home;
