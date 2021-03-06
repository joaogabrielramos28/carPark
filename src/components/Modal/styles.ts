import styled, { keyframes } from "styled-components";
import InputForm from "../Input/Input";

const appear = keyframes`
  from{
    margin-left:-99vw;

  }
  to{
    margin-left:0;
  }
`;

export const Container = styled.div`
  width: 1200px;
  height: 800px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  z-index: 99;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  animation: ${appear} 0.5s ease;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: 0.5s ease;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  top: 0;
  left: 0;
`;
