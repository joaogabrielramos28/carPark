import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
`;

export const NoParks = styled.h3`
  padding: 0 20px;
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const ContainerNoParks = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 550px) {
    height: 300px;
  }
`;
