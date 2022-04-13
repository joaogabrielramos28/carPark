import React, { useRef } from "react";
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
  ModalContent,
  TitleModal,
  DescriptionModal,
  InputReset,
  ButtonReset,
} from "../../../styles/pages/login/styles";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useLoginContext } from "../../../contexts/Login";

import { BackButton, Modal } from "../../../components";
import { useMeContext } from "../../../contexts/Me";
const Login = () => {
  const {
    email,
    password,
    loginWithCredentials,
    loginWithGithub,
    loginWithGoogle,
    resetPassword,
    handleToogleModal,
    modalIsOpen,
  } = useLoginContext();

  const emailRef = useRef<HTMLInputElement>(null);

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
          <ForgetMyPass onClick={handleToogleModal}>
            Esqueci minha senha
          </ForgetMyPass>
        </Form>
      </FormContainer>
      <ImageContainer></ImageContainer>
      {modalIsOpen && (
        <Modal onClose={handleToogleModal}>
          <ModalContent>
            <TitleModal>Esqueceu sua senha?</TitleModal>
            <DescriptionModal>
              Digite seu e-mail para enviarmos um link para você redefinir sua
              senha.
            </DescriptionModal>

            <InputReset
              placeholder="Digite seu e-mail"
              inputRef={emailRef}
              onChange={(e) => console.log(emailRef.current?.value!)}
            />
            <ButtonReset
              onClick={() => resetPassword(emailRef.current?.value!)}
            >
              Enviar e-mail
            </ButtonReset>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Login;
