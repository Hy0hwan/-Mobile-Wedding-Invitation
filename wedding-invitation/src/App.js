import React from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';
import Paragraph from './components/Paragraph';
import SaveTheDate from './components/SaveTheDate';
import Information from './components/Information';
import ImgBox from './components/ImgBox';
import KakaoMap from './components/KakaoMap';
import AccountDetails from './components/AccountDetails';
import GlobalStyle from './components/GlobalStyle';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainImage />
        <SubContainer>
          <Paragraph />
          <SaveTheDate />
          <Information />
          <ImgBox />
          <KakaoMap />
          <AccountDetails />
          <MusicPlayer />
        </SubContainer>
        <Footer />
      </Container>
    </>
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
  gap: 10px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    /* height: auto; */
  }
`;

const SubContainer = styled.div`
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
    height: auto;
    padding: 10px;
  }
`;
