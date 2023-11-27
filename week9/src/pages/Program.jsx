import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemComponent/ItemDetail';

export default function Program() {
  const { title } = useParams();
  const { state } = useLocation();

  console.log(title);
  console.log(state);

  return <ItemDetail title={title} poster_path={state.poster_path} />;
}
