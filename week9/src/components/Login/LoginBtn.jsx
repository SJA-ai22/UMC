import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLoginBtn } from './LoginBtnStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/loginRedux';

export default function LoginBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);
  const loginText = token ? '로그아웃' : '로그인';

  const goLoginPage = () => {
    if (loginText === '로그아웃') dispatch(setToken(null));
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledLoginBtn onClick={goLoginPage}>{loginText}</StyledLoginBtn>;
    </div>
  );
}
