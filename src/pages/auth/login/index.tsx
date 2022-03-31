import React, { FormEvent, useRef } from "react";
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

import {
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  EmailAuthProvider,
} from "firebase/auth";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { app } from "../../../services/firebase";
const Login = () => {
  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  function loginWithGithub(e: FormEvent) {
    const provider = new GithubAuthProvider();
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

  function loginWithGoogle(e: FormEvent) {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;

      console.log(token, user);
    });
  }

  async function loginWithCredentials(e: FormEvent) {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.current?.value!,
        password.current?.value!
      );

      const user = result.user;

      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

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
