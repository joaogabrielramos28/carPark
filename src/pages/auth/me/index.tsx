import React from "react";
import styled from "styled-components";
import {
  getAuth,
  sendEmailVerification,
  updateProfile,
  reload,
  updatePhoneNumber,
} from "firebase/auth";
import { useLoginContext } from "../../../contexts/Login";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Painel = styled.section`
  padding: 20px 40px;
  margin-top: 40px;
  width: 1200px;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const UserName = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  margin-top: 20px;
  font-size: 1.6rem;
`;

export const UserEmail = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  margin-top: 20px;
  font-size: 1.6rem;
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
const Me = () => {
  const { user } = useLoginContext();
  const auth = getAuth();
  const update = async () => {
    await updateProfile(auth.currentUser!, {
      displayName: "João Gabriel",
      photoURL: "https://avatars.githubusercontent.com/u/71793869?v=4",
    });
  };

  const handleSendEmailConfirmation = async () => {
    await sendEmailVerification(auth.currentUser!);
    reload(auth.currentUser!);
  };
  const lastLoginTimeStamp = Number(user?.user.lastLoginAt);
  const createdAtTimeStamp = Number(user?.user.createdAt);
  const lastLogindate = new Date(lastLoginTimeStamp).toLocaleString("pt-BR");
  const createdAtdate = new Date(createdAtTimeStamp).toLocaleString("pt-BR");

  return (
    <Container>
      {!!user && (
        <Painel>
          <UserImage src={user?.user?.photoURL || "/user-placeholder.png"} />
          <UserName>{user?.user.displayName}</UserName>
          <UserEmail>{user?.user.email}</UserEmail>

          {!user?.user.emailVerified && (
            <ReSendConfirmation onClick={handleSendEmailConfirmation}>
              Reenviar email para confirmação
            </ReSendConfirmation>
          )}
          <UserLastLoginTitle>Ultimo Acesso</UserLastLoginTitle>
          <UserLastLoginDate>{lastLogindate}</UserLastLoginDate>
          <UserLastLoginTitle>Conta criada</UserLastLoginTitle>
          <UserLastLoginDate>{createdAtdate}</UserLastLoginDate>
        </Painel>
      )}
    </Container>
  );
};
export default Me;
