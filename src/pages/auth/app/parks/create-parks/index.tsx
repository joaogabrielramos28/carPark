import { GetServerSideProps } from "next";
import Router from "next/router";
import React from "react";
import App from "../..";
import { SelectForm } from "../../../../../components";
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
          <InputFormPark label="Nome" />
        </FormContainer>
        <InputGroup>
          <InputFormPark label="Endereço" />
          <SelectForm label="Estado" states={states} />
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
