import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, {
  createContext,
  FormEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { app } from "../../services/firebase";
import { useLoginContext } from "../Login";
import { IRegisterContext } from "./types";
import { setCookie } from "nookies";
import Router from "next/router";
const RegisterContext = createContext({} as IRegisterContext);

const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      email?.current!.value,
      password?.current!.value
    );
    setLoading(false);
    Router.push("/");
  };
  return (
    <RegisterContext.Provider
      value={{
        handleSubmit,
        email,
        password,
        loading,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
};

export { RegisterContext, RegisterProvider, useRegisterContext };
