import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/Login";

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
import Image from "next/image";
import Loading from "../Loading/Loading";
import theme from "../../styles/theme";

const Header = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [dropDownIsActive, setDropDownIsActive] = useState<boolean>(false);
  const { user, logout } = useLoginContext();

  const toggleDropDown = () => {
    if (!dropDownIsActive) {
      setDropDownIsActive(true);
    } else {
      setDropDownIsActive(false);
    }
  };
  const isAdmin = user?.user?.reloadUserInfo?.customAttributes
    ? JSON.parse(user?.user.reloadUserInfo?.customAttributes)
    : "";

  useEffect(() => {
    user?.user?.photoURL !== undefined
      ? setImageLoading(false)
      : setImageLoading(true);
  }, [user]);
  console.log(isAdmin.admin);

  return (
    <Container>
      <LogoWrapper>
        <Link href={"/"} passHref>
          <Logo src="/logo.svg" width={150} height={100} />
        </Link>
      </LogoWrapper>

      <ActionsWrapper>
        {!!user ? (
          <UserLoggedInWrapper onClick={toggleDropDown}>
            {imageLoading && (
              <Loading size={30} color={theme.colors.secondary} />
            )}
            <ImageWrapper>
              <AvatarLogo
                src={user?.user?.photoURL || "/user-placeholder.png"}
                width={30}
                height={30}
                alt={"User logged image"}
              />
              <FiChevronDown size={20} />
            </ImageWrapper>
            {dropDownIsActive && (
              <DropDown>
                {isAdmin.admin && (
                  <Link href={"/auth/app"} passHref>
                    <DropDownOption>Dashboard</DropDownOption>
                  </Link>
                )}

                <Link href={"/auth/me"} passHref>
                  <DropDownOption>Perfil</DropDownOption>
                </Link>
                <DropDownOption>Reservas</DropDownOption>
                <DropDownOption onClick={logout}>Logout</DropDownOption>
              </DropDown>
            )}
          </UserLoggedInWrapper>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </ActionsWrapper>
    </Container>
  );
};
export default Header;
