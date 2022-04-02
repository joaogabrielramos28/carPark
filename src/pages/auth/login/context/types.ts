import { FormEvent } from "react";

export interface ILoginContext {
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  loginWithGithub: (e: FormEvent) => Promise<void>;
  loginWithGoogle: (e: FormEvent) => Promise<void>;
  loginWithCredentials: (e: FormEvent) => Promise<void>;
  setUser: React.Dispatch<any>;
  user: any;
}
