import { User } from "firebase/auth";
import { FormEvent } from "react";

export interface ILoginContext {
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  loginWithGithub: (e: FormEvent) => Promise<void>;
  loginWithGoogle: (e: FormEvent) => Promise<void>;
  loginWithCredentials: (e: FormEvent) => Promise<void>;
  setUser: React.Dispatch<IUser | null>;
  user: IUser | null;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  modalIsOpen: boolean;
  handleToogleModal: () => void;
  loadingLogin: boolean;
  loadingSendEmail: boolean;
}

export interface IUser {
  token: string | Promise<string>;
  user: UserFirebase;
  type: string;
}

export interface UserFirebase extends User {
  createdAt?: string;
  lastLoginAt?: string;
}
