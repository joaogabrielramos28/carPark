import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 10px 75px;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background-color: transparent;
`;
export const Logo = styled(Image)``;
export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.shape};
  }
`;
