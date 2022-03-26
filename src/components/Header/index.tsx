import Link from "next/link";
import React from "react";

import { Container, LogoWrapper, Logo, ActionsWrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src="/logo.png" width={150} height={100} />
      </LogoWrapper>

      <ActionsWrapper>
        <Link href="/">Login</Link>
        <Link href="/">Register</Link>
      </ActionsWrapper>
    </Container>
  );
};
export default Header;
