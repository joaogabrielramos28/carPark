import { Checkbox } from "@material-ui/core";
import { GetServerSideProps } from "next";
import Router from "next/router";
import React from "react";
import App from "../..";
import { CheckBoxTypeSpot, SelectForm } from "../../../../../components";
import InputForm from "../../../../../components/Input/Input";
import { IStatesProps } from "../../../../../components/SelectForm/types";
import { ibgeApi } from "../../../../../services/api";
import {
  Container,
  Title,
  FormContainer,
  InputGroup,
  InputFormPark,
} from "../../../../../styles/pages/parks/create-parks/styles";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
interface ICreateParkProps {
  states: IStatesProps[];
}

const CreateParks = ({ states }: ICreateParkProps) => {
  return (
    <>
      <App />

      <Container>
        <Title>Cadastrar Park</Title>
        <FormContainer>
          <InputFormPark label="Nome" placeholder="Nome do Park" />
        </FormContainer>
        <InputGroup>
          <InputFormPark label="Endereço" placeholder="Endereço do Park" />
          <SelectForm label="Estado" states={states} />
        </InputGroup>

        <InputGroup>
          {/* <CheckBoxGroup>
            <CheckBoxTypeSpot name="car" icon={FaCarSide} />
            <CheckBoxTypeSpot name="bike" icon={RiMotorbikeFill} />
            <CheckBoxTypeSpot name="truck" icon={FaTruck} />
          </CheckBoxGroup> */}

          <SelectForm
            label="Periodo"
            options={["Diário", "Semanal", "Mensal"]}
          />
          <InputFormPark label="Preço" type="number" placeholder="R$ 99.99" />
        </InputGroup>
      </Container>
    </>
  );
};
export default CreateParks;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await ibgeApi.get<IStatesProps[]>(
    "localidades/estados?orderBy=nome"
  );

  return {
    props: {
      states: response.data,
    },
  };
};
