import React from "react";
import {
  Container,
  ArrowBack,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Button,
  HasAccount,
} from "../../styles/pages/register/styles";
import InputForm from "../../components/Input/Input";
import Link from "next/link";
import { BackButton, Loading } from "../../components";
import theme from "../../styles/theme";

import { Formik } from "formik";
import { RegisterSchema } from "../../validation";
import { IUserRegisterValues } from "../../types/Form";
import { useAuthContext } from "../../contexts/Auth";

const Register = () => {
  const { register, loadingAuth } = useAuthContext();
  return (
    <Container data-aos="fade-right">
      <ArrowBack>
        <BackButton />
      </ArrowBack>
      <FormContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values: IUserRegisterValues) => register(values)}
        >
          {({ handleSubmit, errors, touched, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Crie sua conta</Title>
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
                type={"password"}
                name="password"
                placeholder="Digite sua senha"
                value={values.password}
                onChange={handleChange}
                error={
                  errors.password && touched.password ? errors.password : ""
                }
              />

              <Button type="submit">
                {loadingAuth ? (
                  <>
                    <Loading color={theme.colors.shape} size={36} />
                  </>
                ) : (
                  "Criar conta"
                )}
              </Button>
              <Link href={"/login"} passHref>
                <HasAccount>Já tenho uma conta</HasAccount>
              </Link>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <ImageContainer></ImageContainer>
    </Container>
  );
};
export default Register;
