import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './ItemComponent/Item';

export default function MovieBox({ title, poster_path, vote_average, overview }) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movies/${title}`, {
      state: { title, poster_path, vote_average, overview },
    });
  };

  return (
    <Item
      title={title}
      poster_path={poster_path}
      vote_average={vote_average}
      overview={overview}
      Click={onClickMovieItem}
    />
  );
}
