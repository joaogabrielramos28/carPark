import React, { useState } from "react";

import { Container, Label, Select } from "./styles";
import { ISelectFormProps } from "./types";

const SelectForm = ({ states, label }: ISelectFormProps) => {
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
      <Select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocus={onFocus}
      >
        <option>Selecione um estado</option>
        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.nome}
          </option>
        ))}
      </Select>
    </Container>
  );
};
export default SelectForm;
