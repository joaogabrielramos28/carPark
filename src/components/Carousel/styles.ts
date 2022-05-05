import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 30px;
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.9);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
      transition: color 0.4s ease-in-out;
    }
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 30px;
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.9);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
      transition: color 0.4s ease-in-out;
    }
  }
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    width: 100%;
    opacity: 1;
    transition-duration: 1s;
  }
`;
