import styled from "styled-components";
import InputForm from "../Input/Input";

export const Container = styled.div`
  width: 1200px;
  height: 800px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: 0.5s ease;
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const UserImageWrapper = styled.div`
  position: relative;
  input {
    display: none;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CircleCamera = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  right: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.4s;
  }
`;

export const UserImage = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
`;

export const ImageInput = styled.input``;

export const InfoWrapper = styled.section``;

export const Info = styled.div``;

export const InputEdit = styled(InputForm)`
  width: 300px;

  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ChangePasswordWrapper = styled.div`
  margin-top: 40px;
`;

export const UpdateUser = styled.button`
  width: 300px;

  padding: 12px;

  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.shape};

  outline: none;
  border: none;

  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.4s ease;
  }
`;
