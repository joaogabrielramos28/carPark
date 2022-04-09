import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  position: relative;
`;

export const ArrowBack = styled.div`
  padding: 50px 80px;
  position: absolute;
  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.4;
      transition: 0.7s;
    }
  }
`;

export const FormContainer = styled.div`
  padding: 0 80px;
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
  background-color: ${({ theme }) => theme.colors.success};

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

export const OauthSection = styled.div`
  width: 100%;
  display: flex;
`;

export const ButtonOAuth = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  margin: 0 5px;
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
  background: url("/login-bg.jpg") no-repeat bottom;
  background-size: cover;
  object-fit: cover;
`;

export const ForgetMyPass = styled.span`
  max-width: 450px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
  }
`;
