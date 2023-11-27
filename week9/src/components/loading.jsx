import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingBox = styled.div`
  position: fixed; // 화면에 고정
  top: 0;
  left: 0;
  width: 100%; // 화면 전체를 차지하도록 설정
  height: 100%;
  display: flex; // 중앙 정렬을 위해 flex 사용
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
  background-color: rgba(0, 0, 0, 0.5); // 흐린 배경
  z-index: 999; // 다른 요소 위에 위치하도록 z-index 설정
`;

export const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-top: 7px solid rgb(0, 85, 255);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
