import styled, { css } from "styled-components";

interface ContainerProps {
  isLast?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 250px;
  ${({ theme, isLast }) =>
    !isLast &&
    css`
      border-right: 1px solid ${theme.colors.title_light};
    `};
  padding: 10px;
  margin: 0 30px;

  @media (max-width: 550px) {
    margin: 0;
    padding: 20px;
    border-right: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 550px) {
    margin-left: 10px;
  }
`;
export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Type = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
