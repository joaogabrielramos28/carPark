import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 97px;
  align-items: center;
  height: 550px;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: 100px;
  height: 100%;
  margin-top: 80px;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.title};
`;
