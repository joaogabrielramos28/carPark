import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 97px;
  align-items: center;
  height: 550px;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: left;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Button = styled.button`
  max-width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.shape};
  padding: 16px;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;

  font-size: 16px;

  &:hover {
    opacity: 0.7;
    transition: 0.7s ease;
  }
`;
export const ImageWrapper = styled.div``;
