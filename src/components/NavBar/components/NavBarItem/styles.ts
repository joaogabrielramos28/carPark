import styled, { css } from "styled-components";

interface INavBarItemProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const NavItem = styled.button<INavBarItemProps>`
  border: none;
  outline: none;
  width: 60px;
  height: 100%;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary_light};
      border-left: 2px solid ${({ theme }) => theme.colors.secondary};
      svg {
        color: ${({ theme }) => theme.colors.secondary};
      }
    `}

  &:hover {
    transition: 0.4s background-color ease;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const ItemsWrapper = styled.div`
  position: absolute;
  right: -180px;
  top: 15px;

  background-color: ${({ theme }) => theme.colors.shape};

  width: 180px;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  z-index: 2;
`;

export const Title = styled.p`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
