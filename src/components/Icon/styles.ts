import styled from "styled-components";

export const Container = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.alert_light};
`;
