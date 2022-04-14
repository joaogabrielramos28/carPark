import React, {
  createContext,
  FormEvent,
  useContext,
  useEffect,
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
  const [user, setUser] = useState<IUser | null>({} as IUser);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSendEmail, setLoadingSendEmail] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const auth = getAuth(app);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  async function loginWithGithub(e: FormEvent) {
    setLoadingLogin(true);
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);

      setLoadingLogin(false);
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
    setLoadingLogin(true);
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      });
      setLoadingLogin(false);
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  }

  async function loginWithCredentials(e: FormEvent) {
    setLoadingLogin(true);
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.current?.value!,
        password.current?.value!
      );
      setLoadingLogin(false);
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
    setLoadingSendEmail(true);
    if (email) {
      await sendPasswordResetEmail(auth, email);
      setLoadingSendEmail(false);
    }

    return;
  }

  const handleToogleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          token: user.getIdToken(),
          user,
          type: "default",
        });
      } else {
        setUser(null);
      }
    });
  }, []);

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
        modalIsOpen,
        handleToogleModal,
        loadingLogin,
        loadingSendEmail,
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
