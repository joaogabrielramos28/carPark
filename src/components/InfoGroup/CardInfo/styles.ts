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
`;

export const ContentWrapper = styled.div`
  display: flex;

  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.alert_light};
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Type = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
