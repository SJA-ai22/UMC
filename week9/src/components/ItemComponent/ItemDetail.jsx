import React from 'react';

const BaseUrl = 'https://image.tmdb.org/t/p/w1280/';

export default function ItemDetail({ title, poster_path }) {
  return (
    <div style={{ display: 'flex', marginTop: '30px' }}>
      <div>
        <img src={BaseUrl + poster_path} alt='포스터사진' style={{ width: '400px', marginLeft: '280px' }} />
      </div>
      <div style={{ fontSize: '40px' }}>{title}</div>
    </div>
  );
}
