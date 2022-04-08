import Image from "next/image";
import React from "react";
import { FaGift, FaShapes, FaUserFriends } from "react-icons/fa";
import {
  MdAccountBalanceWallet,
  MdLocalParking,
  MdSecurity,
} from "react-icons/md";
import Features from "../Features/Features";

import { Container, Content, Title, FeaturesWrapper } from "./styles";

const AppInfo = () => {
  return (
    <Container>
      <Content>
        <Title>Nossos recursos</Title>
        <FeaturesWrapper>
          <Features
            icon={MdSecurity}
            title={"Seguro e protegido"}
            description={
              "Nos nossos estacionamentos parceiros você tem toda segurança garantida 24h por dia. "
            }
          />
          <Features
            icon={FaGift}
            title={"Bônus"}
            description={
              "Aqui na CarPark o primeiro mês é por nossa conta e não temos taxa de adesão. "
            }
          />
          <Features
            icon={FaShapes}
            title={"Acesso universal"}
            description={"Acesso o nosso sistema de qualquer lugar!"}
          />
          <Features
            icon={FaUserFriends}
            title={"Indicação"}
            description={`Indique um amigo e ganhe um bonus de R$150. `}
          />
          <Features
            icon={MdAccountBalanceWallet}
            title={"Investimento baixo"}
            description={
              "Estacionamentos premium de baixo custo para deixar seu carro mais seguro. "
            }
          />
          <Features
            icon={MdLocalParking}
            title={"Variedade"}
            description={
              "Possuímos vagas de todos tipos de veículos para inclusão de todos nossos clientes. "
            }
          />
        </FeaturesWrapper>
      </Content>
    </Container>
  );
};
export default AppInfo;
