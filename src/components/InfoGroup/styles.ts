import styled from "styled-components";

export const Container = styled.div`
  padding: 0 70px;
  margin: 100px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape_light};
  padding: 68px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
