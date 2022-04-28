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
import { IUserRegisterValues } from "../../types/Form";
const RegisterContext = createContext({} as IRegisterContext);

const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values: IUserRegisterValues) => {
    setLoading(true);

    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      Router.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <RegisterContext.Provider
      value={{
        handleRegister,
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
