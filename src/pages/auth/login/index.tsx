import React from "react";
import Image from "next/image";
import InputForm from "../../../components/Input/Input";
import {
  Container,
  ArrowBack,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Button,
  ForgetMyPass,
  OauthSection,
  ButtonOAuth,
} from "../../../styles/pages/login/styles";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useLoginContext } from "../../../contexts/Login";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { BackButton } from "../../../components";
const Login = () => {
  const {
    email,
    password,
    loginWithCredentials,
    loginWithGithub,
    loginWithGoogle,
  } = useLoginContext();

  return (
    <Container data-aos="fade-right">
      <ArrowBack>
        <BackButton />
      </ArrowBack>

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
          <ForgetMyPass>Esqueci minha senha</ForgetMyPass>
        </Form>
      </FormContainer>
      <ImageContainer></ImageContainer>
    </Container>
  );
};

export default Login;
