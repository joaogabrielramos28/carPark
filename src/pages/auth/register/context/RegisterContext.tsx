import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, FormEvent, useContext, useRef } from "react";
import { app } from "../../../../services/firebase";
import { useLoginContext } from "../../login/context";
import { IRegisterContext } from "./types";
import { setCookie } from "nookies";
const RegisterContext = createContext({} as IRegisterContext);

const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { setUser } = useLoginContext();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      email?.current!.value,
      password?.current!.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const token = user.accessToken;

        setUser({
          token,
          user,
          type: "default",
        });

        setCookie(undefined, "carPark.token", token, {
          maxAge: 60 * 60 * 24, // 1 day,
          path: "/",
        });
        setCookie(undefined, "carPark.user", JSON.stringify(user), {
          maxAge: 60 * 60 * 24, // 1 day,
          path: "/",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <RegisterContext.Provider
      value={{
        handleSubmit,
        email,
        password,
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
