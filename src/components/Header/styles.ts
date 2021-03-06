import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
  display: flex;
  justify-content: space-between;
  padding: 0px 97px;
  align-items: center;
  z-index: 1;

  @media (max-width: 550px) {
    padding: 0 20px;
  }
`;

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Logo = styled(Image)`
  cursor: pointer;
`;
export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0 10px;

    &:last-child {
      color: ${({ theme }) => theme.colors.shape};
      background-color: ${({ theme }) => theme.colors.success};
      border-radius: 8px;
      padding: 14px;
      font-weight: 500;
    }

    &:first-child {
      color: ${({ theme }) => theme.colors.title};
      font-weight: 500;
    }

    &:hover {
      opacity: 0.7;
      transition: 0.4s ease;
    }
  }
`;

export const AvatarLogo = styled(Image)`
  border-radius: 50%;
`;

export const UserLoggedInWrapper = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  svg {
    margin-left: 5px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDown = styled.div`
  position: absolute;
  margin-top: 35px;
  background-color: ${({ theme }) => theme.colors.light_gray};
  padding: 12px 4px;
  width: 80px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const DropDownOption = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin: 4px 0;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.title};

  &:hover {
    color: ${({ theme }) => theme.colors.success};
    transition: 0.3s ease;
  }
`;
