import React, { useState, useEffect } from 'react';
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

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.01;
    if (scrollPosition > threshold) {
      setShowContent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <FullScreenMainImage>
        <MainImage />
      </FullScreenMainImage>

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
    /* height: ; */
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
