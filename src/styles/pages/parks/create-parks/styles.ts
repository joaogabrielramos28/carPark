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

export const OpenModalImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenModalImageButton = styled.button`
  z-index: 1;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.shape};
  padding: 12px;
  border-radius: 8px;

  cursor: pointer;

  font-size: 16px;

  &:hover {
    opacity: 0.7;
    transition: 0.7s ease;
  }

  &:disabled {
    opacity: 0.7;
    transition: 0.7s ease;
    cursor: default;
  }
`;

export const SaveImagesButton = styled(OpenModalImageButton)`
  margin-top: 50px;
  width: 100%;
  padding: 12px;
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`;

export const ContainerModal = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnImages = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
`;

export const DropZoneWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 10px 0;
  img {
    border-radius: 8px;
  }

  svg {
    position: absolute;
    z-index: 1;
    top: -10px;
    right: -10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;

export const SubmitWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubmitButton = styled(OpenModalImageButton)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.success};
  border: none;
  outline: none;

  padding: 16px;

  margin-top: 50px;
`;
