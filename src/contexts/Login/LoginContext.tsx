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
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../../services/firebase";
import { ILoginContext, IUser } from "./types";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";

const LoginContext = createContext({} as ILoginContext);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(() => {
    const { "carPark.token": tokenCookies, "carPark.user": userCookies } =
      parseCookies();

    if (tokenCookies && userCookies) {
      return { token: tokenCookies, user: JSON.parse(userCookies), type: "" };
    }

    return null;
  });

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
        token: token!,
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
      router.push("/");
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
          token: token!,
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
      router.push("/");
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
      const token = await user.getIdToken();

      setUser({
        token,
        user,
        type: "default",
      });

      setCookie(undefined, "carPark.token", token!, {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      setCookie(undefined, "carPark.user", JSON.stringify(user), {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    await signOut(auth);

    destroyCookie(undefined, "carPark.token");
    destroyCookie(undefined, "carPark.user");
    setUser(null);

    router.push("/");
  }

  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }
  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        loginWithGithub,
        loginWithGoogle,
        loginWithCredentials,
        user,
        setUser,
        logout,
        resetPassword,
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
