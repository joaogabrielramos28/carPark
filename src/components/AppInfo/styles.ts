import styled from "styled-components";

export const Container = styled.div`
  padding: 0 70px;

  display: flex;
  justify-content: space-between;
  padding: 0 97px;
  align-items: center;
  height: 550px;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-left: 100px;
  height: 100%;
  margin-top: 80px;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ImageWrapper = styled.div`
  max-width: 650px;
`;

export const Subtitle = styled.span`
  font-size: 24px;
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.title};
  text-align: justify;
`;

export const FeaturesContainer = styled.section`
  margin-top: 20px;
`;
