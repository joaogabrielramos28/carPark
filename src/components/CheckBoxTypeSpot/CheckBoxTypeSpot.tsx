import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { useTheme } from "styled-components";

import { CheckBoxWrapper } from "./styles";
import { ICheckBoxTypeSpotProps } from "./types";

const CheckBoxTypeSpot = ({ icon: Icon, name }: ICheckBoxTypeSpotProps) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const color = checked ? theme.colors.success : theme.colors.text;

  return (
    <CheckBoxWrapper>
      <Icon size={16} color={checked ? theme.colors.success : ""} />
      <Checkbox
        style={{ color: color }}
        name={name}
        value={checked}
        onChange={handleChange}
      />
    </CheckBoxWrapper>
  );
};
export default CheckBoxTypeSpot;
