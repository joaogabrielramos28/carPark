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
} from "../../../styles/pages/register/styles";
import InputForm from "../../../components/Input/Input";
import { useRegisterContext } from "../../../contexts/Register";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BackButton } from "../../../components";

const Register = () => {
  const { email, password, handleSubmit } = useRegisterContext();
  return (
    <Container data-aos="fade-right">
      <ArrowBack>
        <BackButton />
      </ArrowBack>
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
          <Link href={"/auth/login"} passHref>
            <HasAccount>Já tenho uma conta</HasAccount>
          </Link>
        </Form>
      </FormContainer>
      <ImageContainer></ImageContainer>
    </Container>
  );
};
export default Register;
