import styled, { css } from "styled-components";
import InputForm from "../../../components/Input/Input";

export const Header = styled.header`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: flex-start;
  padding: 20px 40px;

  svg {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const Painel = styled.section`
  padding: 0px 40px;
  width: 1200px;
  height: 800px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(-120px);
`;

export const UserImage = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
`;

export const ImageInput = styled.input``;

export const UserInfo = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 20px;
  font-size: 1.2rem;

  svg {
    margin-left: 5px;

    cursor: pointer;
  }
`;

export const ReSendConfirmation = styled.button`
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.success};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.shape};
  padding: 16px;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;
  height: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;

  &:hover {
    opacity: 0.7;
    transition: 0.7s ease;
  }
`;

export const UserDate = styled.h2`
  color: ${({ theme }) => theme.colors.title};
`;

export const UserLastLoginTitle = styled.h2`
  color: ${({ theme }) => theme.colors.title};
`;

export const UserLastLoginDate = styled.span``;

export const UserLastLogin = styled.h2``;

export const Box = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 12px 18px;
`;

export const BoxHeader = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

export const BoxTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
  font-size: 1.6rem;
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

export const UserImageModal = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
`;

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
  height: 42px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.shape};

  outline: none;
  border: none;

  border-radius: 8px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.4s ease;
  }
`;
