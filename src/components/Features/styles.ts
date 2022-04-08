import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
  margin: 10px 0 20px 0;
  font-size: 24px;
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
