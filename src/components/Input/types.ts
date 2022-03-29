import { InputHTMLAttributes } from "react";

export interface IInputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}
