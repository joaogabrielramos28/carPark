import styled from "styled-components";
import InputForm from "../../../../components/Input/Input";

export const Container = styled.div`
  margin: 104px 36px 16px 104px;
  height: 250px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 50px 10px;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.4rem;
  text-align: center;
`;

export const FormContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
`;

export const InputFormPark = styled(InputForm)`
  padding: 16px 12px;
`;
