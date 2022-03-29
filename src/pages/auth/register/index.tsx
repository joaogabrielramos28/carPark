import React, { FormEvent, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
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
import { app } from "../../../services/firebase/index";

interface ISubmit {
  auth: Auth;
  email: string;
  password: string;
}

const Register = () => {
  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log(email.current?.value);
    console.log(password.current?.value);

    createUserWithEmailAndPassword(
      auth,
      email?.current!.value,
      password?.current!.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
