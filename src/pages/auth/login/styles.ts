import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const FormContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  justify-content: center;
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.title};
`;

export const Button = styled.button`
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.shape};

  padding: 12px 8px;
  border-radius: 4px;
  margin-top: 20px;

  border: none;
  outline: none;

  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.7s;
  }
`;

export const ButtonOAuth = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.7s;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
