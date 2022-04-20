import Link from "next/link";
import React from "react";

import { Container } from "./styles";
import { ItemProps } from "./types";

const Item = ({ title, path }: ItemProps) => {
  return (
    <Link href={`/auth/app/${path}`} passHref>
      <Container>{title}</Container>
    </Link>
  );
};
export default Item;
