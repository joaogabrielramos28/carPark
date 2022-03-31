import Image from "next/image";
import InputForm from "../../../components/Input";
import {
  Container,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Button,
  ButtonOAuth,
} from "./styles";

import { signInWithPopup, GithubAuthProvider, getAuth } from "firebase/auth";

import { BsGithub } from "react-icons/bs";
import { app } from "../../../services/firebase";
import { FormEvent } from "react";
const Login = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth(app);

  function loginWithGithub(e: FormEvent) {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={() => {}}>
          <Title>Entre na sua conta</Title>
          <InputForm label="E-mail" placeholder="Digite seu email" />
          <InputForm
            label="Senha"
            type={"password"}
            placeholder="Digite sua senha"
          />
          <ButtonOAuth onClick={loginWithGithub}>
            <BsGithub color={"white"} size={24} />
          </ButtonOAuth>
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
