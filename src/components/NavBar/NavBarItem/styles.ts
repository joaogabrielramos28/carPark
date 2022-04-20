import styled, { css } from "styled-components";

interface INavBarItemProps {
  active?: boolean;
}

export const NavItem = styled.button<INavBarItemProps>`
  border: none;
  outline: none;
  width: 60px;
  background-color: transparent;
  cursor: pointer;

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

export const NavItemWithoutPath = styled.span`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transition: 0.4s background-color ease;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
