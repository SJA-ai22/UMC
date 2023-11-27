import React from 'react';
import * as S from './NotFoundStyled';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <S.notFoundContainer>
      <S.notFoundTitle>해당 페이지를 찾지 못했습니다.</S.notFoundTitle>
      <S.notFoundDetail>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </S.notFoundDetail>
      <S.notFoundBtn onClick={goHome}>메인 페이지로 이동</S.notFoundBtn>
    </S.notFoundContainer>
  );
}
