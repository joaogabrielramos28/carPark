import Link from "next/link";
import styled from "styled-components";

export const Container = styled.button`
  background: none;
  outline: none;
  border: none;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.title_light};
    transition: 0.4s ease;
  }
`;
