import React, { useState } from "react";
import { Container, Input, Label } from "./styles";
import { IInputFormProps } from "./types";
const InputForm = ({
  label,
  type = "text",
  placeholder,
  inputRef,
  ...rest
}: IInputFormProps) => {
  const [onFocus, setOnFocus] = useState(false);

  const handleInputFocus = (): void => {
    setOnFocus(true);
  };

  const handleInputBlur = (): void => {
    setOnFocus(false);
  };
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocus={onFocus}
        {...rest}
        placeholder={placeholder}
        ref={inputRef}
      />
    </Container>
  );
};
export default InputForm;
