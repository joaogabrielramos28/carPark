import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  outline: none;
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  cursor: pointer;

  :hover {
    transition: background-color 0.6s;
    transition: color 0.9s;
    color: ${({ theme }) => theme.colors.secondary};

    background-color: ${({ theme }) => theme.colors.secondary_light};
  }
`;
