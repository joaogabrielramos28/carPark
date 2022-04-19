import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 60px;
  background: ${({ theme }) => theme.colors.shape};

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
