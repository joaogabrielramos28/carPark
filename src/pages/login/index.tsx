import React, { useRef } from "react";
import InputForm from "../../components/Input/Input";
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
} from "../../styles/pages/login/styles";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useAuthContext } from "../../contexts/Auth";

import { BackButton, Loading, Modal } from "../../components";
import theme from "../../styles/theme";
import { Formik } from "formik";
import { IUserLoginValues } from "../../types/Form";
import { SignupSchema } from "../../validation";
const Login = () => {
  const {
    loginWithCredentials,
    loginWithGithub,
    loginWithGoogle,
    resetPassword,
    handleToogleModal,
    modalIsOpen,
    loadingAuth,
    loadingSendEmail,
  } = useAuthContext();

  return (
    <Container data-aos="fade-right">
      <ArrowBack>
        <BackButton />
      </ArrowBack>

      <FormContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: IUserLoginValues) => {
            loginWithCredentials(values);
          }}
          validationSchema={SignupSchema}
        >
          {({ handleSubmit, values, handleChange, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Entre na sua conta</Title>
              <InputForm
                label="E-mail"
                name="email"
                placeholder="Digite seu email"
                value={values.email}
                onChange={handleChange}
                error={errors.email && touched.email ? errors.email : ""}
              />
              <InputForm
                label="Senha"
                name="password"
                type={"password"}
                placeholder="Digite sua senha"
                value={values.password}
                onChange={handleChange}
                error={
                  errors.password && touched.password ? errors.password : ""
                }
              />
              <OauthSection>
                <ButtonOAuth onClick={loginWithGithub}>
                  <BsGithub color={"white"} size={24} />
                </ButtonOAuth>
                <ButtonOAuth onClick={loginWithGoogle}>
                  <BsGoogle color={"white"} size={24} />
                </ButtonOAuth>
              </OauthSection>

              <Button type="submit">
                {loadingAuth ? (
                  <>
                    <Loading color={theme.colors.shape} size={40} />
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
              <ForgetMyPass onClick={handleToogleModal}>
                Esqueci minha senha
              </ForgetMyPass>
              {modalIsOpen && (
                <Modal onClose={handleToogleModal} overlay>
                  <ModalContent>
                    <TitleModal>Esqueceu sua senha?</TitleModal>
                    <DescriptionModal>
                      Digite seu e-mail para enviarmos um link para você
                      redefinir sua senha.
                    </DescriptionModal>

                    <InputReset placeholder="Digite seu e-mail" />
                    <ButtonReset onClick={() => resetPassword(values.email)}>
                      {loadingSendEmail ? (
                        <>
                          <Loading color={theme.colors.shape} size={40} />
                        </>
                      ) : (
                        "Enviar e-mail"
                      )}
                    </ButtonReset>
                  </ModalContent>
                </Modal>
              )}
            </Form>
          )}
        </Formik>
      </FormContainer>
      <ImageContainer></ImageContainer>
    </Container>
  );
};

export default Login;
