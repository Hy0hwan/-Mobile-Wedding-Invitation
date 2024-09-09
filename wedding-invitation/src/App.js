import React, { useState } from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';
import Paragraph from './components/Paragraph';
import SaveTheDate from './components/SaveTheDate';
import Information from './components/Information';
import ImgBox from './components/ImgBox';
import KakaoMap from './components/KakaoMap';
import AccountDetails from './components/AccountDetails';

function App() {
  const [showContent, setShowContent] = useState(false);

  // 버튼 클릭 혹은 스크롤 등 이벤트로 상태를 바꿀 수 있도록 트리거 추가
  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <Container>
      <FullScreenMainImage>
        <MainImage />
      </FullScreenMainImage>

      <button onClick={handleShowContent}>더보기</button>

      {showContent && (
        <Content>
          <Paragraph />
          <SaveTheDate />
          <Information />
          <ImgBox />
          <KakaoMap />
          <AccountDetails />
        </Content>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
  gap: 10px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }

  img,
  iframe {
    max-width: 100%;
    height: auto;
  }
`;

const FullScreenMainImage = styled.div`
  width: 100%;
  height: 100vh; /* 화면 전체를 차지 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
