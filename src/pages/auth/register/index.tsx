import React from "react";
import {
  Container,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Button,
} from "./styles";
import InputForm from "../../../components/Input";
import Image from "next/image";
import { useRegisterContext } from "./context";

const Register = () => {
  const { email, password, handleSubmit } = useRegisterContext();
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Crie sua conta</Title>
          <InputForm
            label="E-mail"
            placeholder="Digite seu email"
            inputRef={email}
          />
          <InputForm
            label="Senha"
            type={"password"}
            placeholder="Digite sua senha"
            inputRef={password}
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image
          src="/parking.gif"
          width={650}
          height={650}
          alt="A woman opening your car in car park"
        />
      </ImageContainer>
    </Container>
  );
};
export default Register;
