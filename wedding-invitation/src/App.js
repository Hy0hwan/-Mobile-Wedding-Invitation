import React from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <Container>
      <MainImage />
      <Paragraph />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  max-width: 100vw; /* 화면 너비를 넘지 않도록 설정 */
  width: 100%; /* 화면에 맞춰 유연하게 조정 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  padding: 20px; /* 내용물과 컨테이너 사이 여백 추가 */
  box-sizing: border-box; /* 패딩을 포함하여 너비와 높이를 설정 */

  @media (max-width: 768px) {
    padding: 0px; /* 모바일에서 여백을 조금 줄임 */
    height: auto;
  }
`;
