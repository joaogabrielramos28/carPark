import React, { FormEvent } from "react";
import Image from "next/image";
import InputForm from "../../../components/Input";
import {
  Container,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Button,
  OauthSection,
  ButtonOAuth,
} from "./styles";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { useLoginContext } from "./context";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
  const {
    email,
    password,
    loginWithCredentials,
    loginWithGithub,
    loginWithGoogle,
  } = useLoginContext();

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={loginWithCredentials}>
          <Title>Entre na sua conta</Title>
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
          <OauthSection>
            <ButtonOAuth onClick={loginWithGithub}>
              <BsGithub color={"white"} size={24} />
            </ButtonOAuth>
            <ButtonOAuth onClick={loginWithGoogle}>
              <BsGoogle color={"white"} size={24} />
            </ButtonOAuth>
          </OauthSection>
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image
          src="/parking-login.gif"
          width={650}
          height={650}
          alt="A woman opening your car in car park"
        />
      </ImageContainer>
    </Container>
  );
};

export default Login;
