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
import { IResetPassword, IUserLoginValues } from "../../types/Form";
import { SignupSchema } from "../../validation";
import { ResetPasswordSchema } from "../../validation/Login";
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

              <Button
                type="submit"
                disabled={errors.email && errors.password ? true : false}
              >
                {loadingAuth ? (
                  <>
                    <Loading color={theme.colors.shape} size={36} />
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
              <ForgetMyPass onClick={handleToogleModal}>
                Esqueci minha senha
              </ForgetMyPass>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <ImageContainer></ImageContainer>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values: IResetPassword) => {
          resetPassword(values);
        }}
        validationSchema={ResetPasswordSchema}
      >
        {({ handleSubmit, values, handleChange, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            {modalIsOpen && (
              <Modal onClose={handleToogleModal} overlay>
                <ModalContent>
                  <TitleModal>Esqueceu sua senha?</TitleModal>
                  <DescriptionModal>
                    Digite seu e-mail para enviarmos um link para você redefinir
                    sua senha.
                  </DescriptionModal>

                  <InputReset
                    placeholder="Digite seu e-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email ? errors.email : ""}
                  />

                  <ButtonReset disabled={errors.email ? true : false}>
                    {loadingSendEmail ? (
                      <>
                        <Loading color={theme.colors.shape} size={36} />
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
    </Container>
  );
};

export default Login;
