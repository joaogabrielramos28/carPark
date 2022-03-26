import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 8px;
`;
