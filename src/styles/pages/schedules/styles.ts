import Image from "next/image";
import styled from "styled-components";

interface IStatusProps {
  color: string;
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SchedulesInfo = styled.section`
  width: 350px;
  height: 300px;
  margin-right: 20px;
  padding: 12px;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.title};

  strong {
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const SchedulesContainer = styled.section`
  max-width: 1200px;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  padding: 12px 16px;
`;

export const ScheduleImage = styled(Image)`
  border-radius: 8px;
`;

export const ScheduleDetails = styled.div`
  padding: 8px;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.title};
`;

export const Period = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const From = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const To = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Total = styled.p`
  margin-top: 20px;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterSchedule = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.p<IStatusProps>`
  ${({ color }) => color && `color: ${color}`};
`;

export const Url = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};

  a {
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const LoadingContainer = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
