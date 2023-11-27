import React from 'react';
import InfoBox from '../components/Info/InfoBox';

export default function Login() {
  return (
    <div>
      <h1 style={{ margin: '30px', letterSpacing: '2px' }}>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </h1>
      <InfoBox />
    </div>
  );
}
