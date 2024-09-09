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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.3; // 스크롤이 화면의 30% 지점에 도달하면 콘텐츠 표시
    console.log(`Scroll Position: ${scrollPosition}, Threshold: ${threshold}`);

    if (scrollPosition > threshold) {
      setShowContent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <MainImage />
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
  padding: 20px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  gap: 10px;
`;
