import styled from "styled-components";

export const NavItem = styled.button`
  border: none;
  outline: none;
  width: 60px;
  background-color: transparent;
  cursor: pointer;

  svg {
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    transition: 0.4s background-color ease;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
