import React from 'react';
import * as S from './ItemBoxStyled';

const BaseUrl = 'https://image.tmdb.org/t/p/w1280/';

export default function Item({ title, poster_path, vote_average, overview, Click }) {
  return (
    <S.ItemContainerBox onClick={Click}>
      <img src={BaseUrl + poster_path} alt='포스터사진' />
      <S.ItemInfoBox>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.ItemInfoBox>
      <S.OverviewContainerWrapperBox>
        <S.OverviewContainerBox>
          <h4>{title}</h4>
          <p>{overview}</p>
        </S.OverviewContainerBox>
      </S.OverviewContainerWrapperBox>
    </S.ItemContainerBox>
  );
}
