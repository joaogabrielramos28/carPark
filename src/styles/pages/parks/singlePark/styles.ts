import styled from "styled-components";

export const ParkHeader = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ParkWrapper = styled.section`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const ParkContent = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ParkInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParkName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;

export const ParkAddress = styled.p`
  margin-top: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const ParkPrice = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParkPeriod = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 3px;
`;

export const ParkDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SpotsTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  svg {
    margin: 0 10px;
  }
`;

export const ScheduleSpot = styled.div`
  margin: 20px 0;
  width: 100%;

  padding: 10px 0 20px 0;
`;

export const ScheduleButton = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.shape};
  padding: 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

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

  svg {
    margin-left: 10px;
  }
`;
