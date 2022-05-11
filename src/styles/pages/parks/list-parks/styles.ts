import Image from "next/image";
import styled, { css } from "styled-components";

interface ButtonDecisionProps {
  backgroundColor: string;
}

interface ButtonAdminProps {
  isAdmin?: boolean;
}

export const TableContainer = styled.div`
  z-index: 10;
  margin: 104px 36px 16px 104px;

  overflow-x: auto;
`;

export const ParkImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonAdmin = styled.button<ButtonAdminProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  ${({ theme, isAdmin }) =>
    isAdmin &&
    css`
      color: ${theme.colors.gray};
      cursor: default;
    `};
`;

export const ModalContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  flex-direction: column;
`;

export const TitleModal = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.4rem;
`;

export const DescriptionModal = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-top: 20px;
`;

export const DecisionWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDecision = styled.button<ButtonDecisionProps>`
  max-width: 240px;
  border: 0;
  border-radius: 8px;
  padding: 12px;
  margin: 0 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 1.1rem;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: 0.4s ease;
  }
`;
