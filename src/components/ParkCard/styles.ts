import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colors.title_light};
  padding: 10px;
  height: 165px;

  cursor: pointer;

  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column;
    height: 100%;
  }
`;

export const ParkWrapper = styled.div``;
export const ParkImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ParkInfoWrapper = styled.div`
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;
export const ParkName = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  margin: 5px 0;
`;
export const ParkAddress = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
export const ParkRating = styled.span`
  display: flex;
  align-items: center;
`;
export const ParkPrice = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
`;

export const Period = styled.span`
  font-weight: 400;
`;

export const ParkWrapperPrice = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 550px) {
    padding: 0 5px;
  }
`;

export const ParkType = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;

  svg {
    margin: 0px 5px;
  }

  @media (max-width: 550px) {
    margin: 10px 0;
  }
`;
