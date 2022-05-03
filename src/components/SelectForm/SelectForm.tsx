import React, { useState } from "react";

import { Container, Label, Select } from "./styles";
import { ISelectFormProps } from "./types";

const SelectForm = ({ options, states, label }: ISelectFormProps) => {
  const [onFocus, setOnFocus] = useState(false);

  const handleInputFocus = (): void => {
    setOnFocus(true);
  };

  const handleInputBlur = (): void => {
    setOnFocus(false);
  };
  const optionsTitle = states ? "Selecione um Estado" : "Selecione uma Opção";

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocus={onFocus}
      >
        <option>{optionsTitle}</option>
        {states &&
          states?.map((state) => (
            <option key={state?.id} value={state?.id}>
              {state?.nome}
            </option>
          ))}
        {options?.map((opt, i) => (
          <option key={i} value={i}>
            {opt}
          </option>
        ))}
      </Select>
    </Container>
  );
};
export default SelectForm;
