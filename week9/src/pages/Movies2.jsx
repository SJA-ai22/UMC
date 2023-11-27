import React, { useEffect, useState } from 'react';
// import { movies } from '../movieDummy'; // api로 데이터를 불러오므로 이제 필요없어짐
import MovieBox from '../components/MovieBox';
import axios from 'axios';
import styled from 'styled-components';

const PageDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const PageBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(240, 159, 159);
  border: none;
  color: white;
  cursor: pointer;
`;

export default function Movies2() {
  const [movies, setMovies] = useState([]);
  const [getdata, setGetdata] = useState(false);
  const [page, setPage] = useState(1);

  //토큰 설정
  const token = process.env.REACT_APP_TOKEN;

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setMovies(response.data.results); // 특정 페이지 값만 가져옴
        setGetdata(true);
      } catch (error) {
        console.error('오류 발생:', error);
      }
    };

    handleGet();
  }, [page]);

  //이전 버튼
  const handleBack = () => {
    setPage(page - 1);
    scrollToTop();
  };
  //다음 버튼
  const handleNext = () => {
    setPage(page + 1);
    scrollToTop();
  };
  //버튼 클릭하면 위로 가게 하기
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {getdata &&
          movies.map((movie) => {
            return (
              <MovieBox
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview={movie.overview}
              />
            );
          })}
        <PageDiv>
          <PageBtn onClick={handleBack} style={{ visibility: page !== 1 ? 'visible' : 'hidden' }}>
            이전
          </PageBtn>
          <div>{page}페이지</div>
          <PageBtn onClick={handleNext}>다음</PageBtn>
        </PageDiv>
      </div>
    </div>
  );
}
