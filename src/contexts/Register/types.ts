import { FormEvent } from "react";
import { IUserRegisterValues } from "../../types/Form";

export interface IRegisterContext {
  handleRegister: (values: IUserRegisterValues) => Promise<void>;
  loading: boolean;
}
