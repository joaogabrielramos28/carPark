import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const DownloadContainer = styled.div`
  max-width: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const CTA = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 700;
  font-size: 22px;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
  font-size: 45px;
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 24px;
  max-width: 500px;
  font-size: 18px;
  margin-top: 8px;
`;
export const ActionsWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const IOSButton = styled.button`
  width: 160px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.success};
  padding: 10px 16px;

  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 9999px;
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: 0.7s ease;

  &:hover {
    opacity: 0.7;
    transition: 0.7s ease;
  }
`;

export const CircleIOS = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;
`;
export const CircleAndroid = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;
`;
export const AndroidButton = styled.button`
  width: 160px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  background-color: transparent;
  padding: 10px 16px;
  margin-left: 24px;

  border: 1px solid ${({ theme }) => theme.colors.success};
  outline: none;
  font-size: 16px;
  border-radius: 9999px;
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: 0.7s ease;

  &:hover {
    opacity: 0.7;
    transition: 0.7s ease;
  }
`;
export const ImageContainer = styled.img`
  max-width: 600px;

  @media (max-width: 550px) {
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
`;
