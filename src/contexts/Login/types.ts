import { User } from "firebase/auth";
import { FormEvent } from "react";
import { IUserLoginValues } from "../../types/Form";

export interface ILoginContext {
  loginWithGithub: (e: FormEvent) => Promise<void>;
  loginWithGoogle: (e: FormEvent) => Promise<void>;
  loginWithCredentials: (values: IUserLoginValues) => Promise<void>;
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
  reloadUserInfo?: {
    customAttributes: string;
  };
}
