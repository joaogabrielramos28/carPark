import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 97px;
  align-items: center;
  height: 550px;
  align-items: center;
  background: url("/test.jpg");
  object-fit: cover;
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Content = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: left;
  flex-direction: column;

  @media (max-width: 550px) {
    width: 100vw;
    justify-content: center;
  }
`;
export const Title = styled.h2`
  z-index: 1;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Button = styled.button`
  z-index: 1;
  max-width: 250px;
  background-color: ${({ theme }) => theme.colors.success};
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
