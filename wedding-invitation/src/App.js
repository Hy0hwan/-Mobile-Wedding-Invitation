import React from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';
import Paragraph from './components/Paragraph';
import SaveTheDate from './components/SaveTheDate';
import Information from './components/Information';
import ImgBox from './components/ImgBox';

function App() {
  return (
    <Container>
      <MainImage />
      <Paragraph />
      <SaveTheDate />
      <Information />
      <ImgBox />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  /* background-color: #f0f0f0; */
  max-width: 768px;
  width: 100%; /* 화면에 맞춰 유연하게 조정 */
  margin: 0 auto; /* 데스크탑에서 가운데 정렬 */
  padding: 20px; /* 내용물과 컨테이너 사이 여백 추가 */
  gap: 10px;

  @media (max-width: 768px) {
    padding: 10px; /* 모바일에서 여백을 조금 줄임 */
    height: auto;
  }
`;
