import React, { useState } from 'react';
import axios from 'axios';
import { StyledInput, InfoForm, InfoTitle, WarningMsg, SubmitBtn, NotCorrectBtn } from './InfoBoxStyled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setId, setPassword, setToken } from '../../redux/loginRedux';

export default function InfoBox() {
  const [user, setUser] = useState('');
  const [showIdErr, setshowIdErr] = useState(false);
  const [pw, setPw] = useState('');
  const [showPwErr, setshowPwErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isButtonActive = user !== '' && pw !== '' && !(showIdErr || showPwErr);

  const handleIdChange = (e) => {
    setUser(e.target.value);

    if (user.trim() === '' || user === '') setshowIdErr(true);
    else setshowIdErr(false);
    dispatch(setId(e.target.value));
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);

    if (pw.trim() === '' || pw === '') setshowPwErr(true);
    else setshowPwErr(false);
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 제출눌렀을때 새로고침이 되지않게 설정
    if (user.trim() === '' || pw.trim() === '') {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    if (user !== 'umcweb') {
      alert('아이디가 잘못되었습니다');
      return;
    } else if (pw !== '1234') {
      alert('비밀번호가 잘못되었습니다!');
      return;
    }

    PostData();
  };

  const userId = useSelector((state) => state.login.userId);
  const userPw = useSelector((state) => state.login.userPw);
  const token = useSelector((state) => state.login.token);

  const PostData = async () => {
    setIsLoading(true);
    try {
      const endpoint = 'http://localhost:8000/user/login';
      const requestBody = {
        id: userId,
        pw: userPw,
      };

      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(endpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 응답 데이터 확인
      console.log(response.data);
      dispatch(setToken(response.data.result.AccessToken));
      localStorage.setItem('token', response.data.result.AccessToken);
      localStorage.setItem('id', response.data.result.userId);
      alert('로그인 완료!');
      navigate('/');
    } catch (error) {
      // 오류 처리
      console.error('Error during POST request:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleButtonClick = () => {
    if (isLoading) {
      return;
    }
  };

  return (
    <div>
      <InfoForm
        className='info-form'
        onSubmit={(e) => {
          handleSubmit(e);
          handleButtonClick();
        }}
      >
        <InfoTitle for='id-input'>아이디</InfoTitle>
        <StyledInput id='id-input' type='id' placeholder='아이디를 입력하세요' value={user} onChange={handleIdChange} />
        {showIdErr ? <WarningMsg>올바른 아이디를 입력해주세요.</WarningMsg> : <WarningMsg>&nbsp;</WarningMsg>}

        <InfoTitle for='pw-input'>비밀번호</InfoTitle>
        <StyledInput
          id='pw-input'
          type='password'
          placeholder='비밀번호를 입력하세요'
          value={pw}
          onChange={handlePwChange}
        />
        {showPwErr ? <WarningMsg>올바른 비밀번호를 입력해주세요.</WarningMsg> : <WarningMsg>&nbsp;</WarningMsg>}
        {isButtonActive ? (
          isLoading ? (
            <SubmitBtn disabled>'로그인확인중...'</SubmitBtn>
          ) : (
            <SubmitBtn type='submit'>확인</SubmitBtn>
          )
        ) : (
          <NotCorrectBtn>확인</NotCorrectBtn>
        )}
      </InfoForm>
    </div>
  );
}
