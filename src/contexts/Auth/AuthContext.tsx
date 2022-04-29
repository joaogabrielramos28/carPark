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
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../services/firebase";
import { IAuthContext, IUser } from "./types";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router, { useRouter } from "next/router";
import {
  IResetPassword,
  IUserLoginValues,
  IUserRegisterValues,
} from "../../types/Form";
import { toastMessage } from "../../utils/toast";

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>({} as IUser);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loadingSendEmail, setLoadingSendEmail] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const auth = getAuth(app);

  async function loginWithGithub(e: FormEvent) {
    setLoadingAuth(true);
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);

      setLoadingAuth(false);
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
    setLoadingAuth(true);
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      });
      setLoadingAuth(false);
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  }

  async function loginWithCredentials(values: IUserLoginValues) {
    const { email, password } = values;
    try {
      setLoadingAuth(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoadingAuth(false);
      router.push("/");
    } catch (error: any) {
      setLoadingAuth(false);
      toastMessage(error.code, "error");
      console.log(error);
    }
  }

  async function logout() {
    await signOut(auth);

    setUser(null);

    destroyCookie(null, "@carPark:token");

    router.push("/");
  }

  const register = async (values: IUserRegisterValues) => {
    setLoadingAuth(true);

    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Router.push("/");
    } catch (error: any) {
      setLoadingAuth(false);
      toastMessage(error.code, "error");
      console.log(error);
    }
  };

  async function resetPassword(values: IResetPassword) {
    const { email } = values;
    if (email) {
      try {
        setLoadingSendEmail(true);
        console.log(email);

        await sendPasswordResetEmail(auth, email);
        setLoadingSendEmail(false);
        toastMessage("Email enviado com sucesso");
      } catch (error: any) {
        console.log(error);
        toastMessage(error.code, "error");
        setLoadingSendEmail(false);
      }
    }

    return;
  }

  const handleToogleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser({
          token,
          user,
          type: "default",
        });
        setCookie(undefined, "@carPark:token", token, { path: "/" });
      } else {
        setUser(null);
        destroyCookie(undefined, "@carPark:token");
      }
    });
  }, []);
  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithGithub,
        loginWithGoogle,
        loginWithCredentials,
        register,
        user,
        setUser,
        logout,
        resetPassword,
        modalIsOpen,
        handleToogleModal,
        loadingAuth,
        loadingSendEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
};

export { useAuthContext, AuthContext, AuthProvider };
