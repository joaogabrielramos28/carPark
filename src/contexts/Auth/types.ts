import { User } from "firebase/auth";
import { FormEvent } from "react";
import {
  IResetPassword,
  IUserLoginValues,
  IUserRegisterValues,
} from "types/Form";

export interface IAuthContext {
  loginWithGithub: (e: FormEvent) => Promise<void>;
  loginWithGoogle: (e: FormEvent) => Promise<void>;
  loginWithCredentials: (values: IUserLoginValues) => Promise<void>;
  setUser: React.Dispatch<IUser | null>;
  user: IUser | null;
  logout: () => Promise<void>;
  resetPassword: (values: IResetPassword) => Promise<void>;
  modalIsOpen: boolean;
  handleToogleModal: () => void;
  loadingAuth: boolean;
  loadingSendEmail: boolean;
  register: (values: IUserRegisterValues) => Promise<void>;
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
