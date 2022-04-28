import React, { useState } from "react";
import { Container, Input, Label, ErrorMessage } from "./styles";
import { IInputFormProps } from "./types";
const InputForm = ({
  label,
  type = "text",
  placeholder,
  inputRef,
  error,
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
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocus={onFocus}
        {...rest}
        placeholder={placeholder}
        ref={inputRef}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default InputForm;
