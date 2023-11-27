// import { Link } from 'react-router-dom';
import * as S from './headerStyled';
import LoginBtn from '../Login/LoginBtn';

export default function Header() {
  return (
    <S.headerContainer>
      <S.header>
        <S.LinkStyled to='/home'>
          <img
            style={{ width: '154px', height: '20px' }}
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
            alt='로고'
          />
        </S.LinkStyled>
        <ul>
          <li>
            <S.LinkStyled to='/movies'>영화</S.LinkStyled>
          </li>
          <li>
            <S.LinkStyled to='/movies2'>영화2</S.LinkStyled>
          </li>
          <li>
            <S.LinkStyled to='/tv'>TV 프로그램</S.LinkStyled>
          </li>
          <li>
            <S.LinkStyled to='/person'>인물</S.LinkStyled>
          </li>
        </ul>
        <LoginBtn />
      </S.header>
    </S.headerContainer>
  );
}
