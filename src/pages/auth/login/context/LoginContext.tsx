import React, {
  createContext,
  FormEvent,
  useContext,
  useRef,
  useState,
} from "react";
import {
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../../../services/firebase";
import { ILoginContext } from "./types";
import { setCookie, parseCookies } from "nookies";

const LoginContext = createContext({} as ILoginContext);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(() => {
    const { "carPark.token": tokenCookies, "carPark.user": userCookies } =
      parseCookies();

    if (tokenCookies && userCookies) {
      return { token: tokenCookies, user: JSON.parse(userCookies) };
    }

    return null;
  });

  console.log(user);

  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  async function loginWithGithub(e: FormEvent) {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;

      setUser({
        token,
        user,
        type: "github",
      });

      setCookie(undefined, "carPark.token", token!, {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      setCookie(undefined, "carPark.user", JSON.stringify(user), {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage);
    }

    // ..
  }

  async function loginWithGoogle(e: FormEvent) {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;

        setUser({
          token,
          user,
          type: "google",
        });

        setCookie(undefined, "carPark.token", token!, {
          maxAge: 60 * 60 * 24, // 1 day
          path: "/",
        });
        setCookie(undefined, "carPark.user", JSON.stringify(user), {
          maxAge: 60 * 60 * 24, // 1 day
          path: "/",
        });
      });
    } catch (error: any) {
      console.log(error);
    }
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

      setUser({
        result,
        user,
        type: "default",
      });

      setCookie(undefined, "carPark.token", result.providerId!, {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      setCookie(undefined, "carPark.user", JSON.stringify(user), {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        loginWithGithub,
        loginWithGoogle,
        loginWithCredentials,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
};

export { useLoginContext, LoginContext, LoginProvider };
