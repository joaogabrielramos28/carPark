import styled, { css } from "styled-components";

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
  width: 150px;
  height: 60px;
  border-radius: 4px 4px 50% 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.4s;
  }
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
  max-width: 400px;
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
