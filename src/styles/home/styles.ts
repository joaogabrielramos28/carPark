import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

export const InfoGroupContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
