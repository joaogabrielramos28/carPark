import { FormEvent } from "react";

export interface IRegisterContext {
  handleSubmit: (e: FormEvent) => void;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  loading: boolean;
}
