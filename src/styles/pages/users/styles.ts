import Image from "next/image";
import styled from "styled-components";

export const TableContainer = styled.div`
  z-index: 10;
  margin: 104px 36px 16px 104px;

  overflow-x: auto;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
