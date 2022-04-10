import styled from "styled-components";

interface LegendItemColorProps {
  optionColor: string;
}

export const Container = styled.div`
  padding: 0 96px;
  margin: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CharWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 450px;
  gap: 50px;
  justify-content: center;
  background: #f5f8ff;
  border-radius: 8px;
  padding: 50px 30px;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Title = styled.h3`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 20px;
`;
export const Subtitle = styled.p`
  max-width: 400px;
  color: ${({ theme }) => theme.colors.title};
  line-height: 22px;
`;

export const Legend = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const LegendItem = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Color = styled.div<LegendItemColorProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ optionColor }) => optionColor};
  margin-right: 5px;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
