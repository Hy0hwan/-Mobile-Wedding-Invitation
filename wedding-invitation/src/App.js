import React from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';
import Paragraph from './components/Paragraph';
import SaveTheDate from './components/SaveTheDate';
import Information from './components/Information';
import ImgBox from './components/ImgBox';
import KakaoMap from './components/KakaoMap';
import AccountDetails from './components/AccountDetails';

function App() {
  return (
    <Container>
      <MainImage />
      <Paragraph />
      <SaveTheDate />
      <Information />
      <ImgBox />
      <KakaoMap />
      <AccountDetails />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  width: 100%; /* 화면에 맞춰 유연하게 조정 */
  max-width: 720px;
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px; /* 내용물과 컨테이너 사이 여백 추가 */
  gap: 10px;
  overflow-x: hidden; /* 가로 스크롤 방지 */

  @media (max-width: 768px) {
    padding: 10px; /* 모바일에서 여백을 조금 줄임 */
    height: auto;
  }

  img,
  iframe {
    max-width: 100%; /* 이미지 및 iframe 요소의 너비를 100%로 제한 */
    height: auto; /* 높이를 자동으로 맞춤 */
  }
`;
