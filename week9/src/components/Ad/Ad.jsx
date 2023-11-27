import React from 'react';

export default function Ad({ props }) {
  if (!props) {
    return null;
  }
  return (
    <img
      style={{ backgroundSize: 'cover', width: '100%' }}
      src={process.env.PUBLIC_URL + '/img/umcImg.svg'}
      alt='logo'
    />
  );
}
