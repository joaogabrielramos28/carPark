import React from "react";
import { ApexOptions } from "apexcharts";
import {
  Container,
  CharWrapper,
  Content,
  InfoContainer,
  Title,
  Subtitle,
  Legend,
  LegendItem,
  Color,
  Name,
} from "./styles";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  labels: [
    "Vagas de carro",
    "Vagas de moto",
    "Vagas de caminhão",
    "Vagas de outros",
  ],
  series: [40, 30, 20, 10],
  colors: ["#00b894", "#F7373A", "#f8c419", "#68292c"],
  legend: { show: false },
};

const ClientsApprove = () => {
  return (
    <Container>
      <Content>
        <CharWrapper>
          <Chart
            type="donut"
            width={550}
            options={options}
            series={options.series}
          />
        </CharWrapper>
        <InfoContainer>
          <Title>Vagas CarPark</Title>
          <Subtitle>
            CarPark é um estacionamento de qualidade que oferece a você a melhor
            oportunidade, com diversos tipos de vagas para os seus veículos.
          </Subtitle>

          <Legend>
            <LegendItem>
              <Color optionColor={"#00b894"} />
              <Name>Vagas de carro</Name>
            </LegendItem>
            <LegendItem>
              <Color optionColor={"#F7373A"} />
              <Name>Vagas de moto</Name>
            </LegendItem>
            <LegendItem>
              <Color optionColor={"#f8c419"} />
              <Name>Vagas de caminhão</Name>
            </LegendItem>
            <LegendItem>
              <Color optionColor={"#68292c"} />
              <Name>Vagas de outros</Name>
            </LegendItem>
          </Legend>
        </InfoContainer>
      </Content>
    </Container>
  );
};
export default ClientsApprove;
