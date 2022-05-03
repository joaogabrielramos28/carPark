import styled, { css } from "styled-components";

interface ISelectProps {
  isFocus?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin: 16px 0;
`;

export const Select = styled.select<ISelectProps>`
  background-color: transparent;
  padding: 16px 12px;
  border-radius: 4px;
  outline: none;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_gray};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      border: 2px solid ${theme.colors.success_light};
    `}
`;
export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`;
