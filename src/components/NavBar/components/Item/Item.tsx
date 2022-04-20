import Link from "next/link";
import React from "react";
import { useDashboardContext } from "../../../../contexts/Dashboard";

import { Container } from "./styles";
import { ItemProps } from "./types";

const Item = ({ title, path }: ItemProps) => {
  const { menuSelected } = useDashboardContext();
  const totalPath = `/auth/app/${path}`;

  return (
    <Link href={totalPath} passHref>
      <Container active={totalPath === menuSelected}>{title}</Container>
    </Link>
  );
};
export default Item;
