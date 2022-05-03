import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-direction: column;
`;

export const DropZoneWrapper = styled.div`
  width: 650px;
  background-color: ${({ theme }) => theme.colors.light_gray};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  border: 3px dotted ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.5;
    transition: 0.4s ease;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      input {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const PreviewZone = styled.section`
  width: 650px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  height: 100%;
`;
