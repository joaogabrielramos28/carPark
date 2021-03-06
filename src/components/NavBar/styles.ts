import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 60px;
  background: ${({ theme }) => theme.colors.shape};

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

export const ItemsWrapper = styled.div``;

export const Settings = styled.div`
  padding: 80px 0;
`;
