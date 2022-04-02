import Link from "next/link";
import React, { useState } from "react";
import { useLoginContext } from "../../pages/auth/login/context";

import {
  Container,
  LogoWrapper,
  Logo,
  ActionsWrapper,
  AvatarLogo,
  UserLoggedInWrapper,
  ImageWrapper,
  DropDown,
  DropDownOption,
} from "./styles";

import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [dropDownIsActive, setDropDownIsActive] = useState<boolean>(false);
  const { user, logout } = useLoginContext();

  const toggleDropDown = () => {
    if (!dropDownIsActive) {
      setDropDownIsActive(true);
    } else {
      setDropDownIsActive(false);
    }
  };
  return (
    <Container>
      <LogoWrapper>
        <Logo src="/logo.png" width={150} height={100} />
      </LogoWrapper>

      <ActionsWrapper>
        {!!user ? (
          <UserLoggedInWrapper onClick={toggleDropDown}>
            <ImageWrapper>
              <AvatarLogo
                src={user?.user?.photoURL || ""}
                width={30}
                height={30}
                alt={"User logged image"}
              />
              <FiChevronDown size={20} />
            </ImageWrapper>
            {dropDownIsActive && (
              <DropDown>
                <DropDownOption>Perfil</DropDownOption>
                <DropDownOption>Reservas</DropDownOption>
                <DropDownOption onClick={logout}>Logout</DropDownOption>
              </DropDown>
            )}
          </UserLoggedInWrapper>
        ) : (
          <>
            <Link href="/">Login</Link>
            <Link href="/">Register</Link>
          </>
        )}
      </ActionsWrapper>
    </Container>
  );
};
export default Header;
