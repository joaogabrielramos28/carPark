import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useDashboardContext } from "../../contexts/Dashboard";

import { CheckBoxWrapper } from "./styles";
import { ICheckBoxTypeSpotProps } from "./types";

const CheckBoxTypeSpot = ({ icon: Icon, name }: ICheckBoxTypeSpotProps) => {
  const { checkedSpot, handleChange } = useDashboardContext();
  const theme = useTheme();

  const checkSpot = checkedSpot.find((spot) => spot.name === name);
  const color = checkSpot?.checked ? theme.colors.success : theme.colors.text;

  return (
    <CheckBoxWrapper>
      <Icon size={16} color={checkSpot?.checked ? theme.colors.success : ""} />
      <Checkbox
        style={{ color: color }}
        name={name}
        value={checkedSpot}
        onChange={handleChange}
      />
    </CheckBoxWrapper>
  );
};
export default CheckBoxTypeSpot;
