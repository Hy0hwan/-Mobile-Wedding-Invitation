import React from 'react';
import LightGallery from 'lightgallery/react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';

// Plugins
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

import styled from 'styled-components';
import img1 from '../assets/imgs/1.jpeg';
import img2 from '../assets/imgs/2.jpeg';
import img3 from '../assets/imgs/3.jpeg';
import img4 from '../assets/imgs/4.png';
import img5 from '../assets/imgs/5.jpeg';
import img6 from '../assets/imgs/6.jpeg';
import img7 from '../assets/imgs/7.jpeg';
import img8 from '../assets/imgs/8.jpeg';
import img9 from '../assets/imgs/9.jpeg';
import img10 from '../assets/imgs/10.jpeg';

const ImgBox = () => {
  const images = [img1, img5, img7, img4, img2, img6, img3, img8, img9, img10];

  return (
    <Container>
      <LightGallery
        plugins={[lgFullscreen, lgZoom]} // 플러그인 추가
        mode="lg-fade"
        speed={500}
        zoom={true}
        fullscreen={true}
      >
        {images.map((image, index) => (
          <a href={image} key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </a>
        ))}
      </LightGallery>
    </Container>
  );
};

export default ImgBox;

const Container = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  overflow-x: auto; /* 가로 스크롤 추가 */

  /* 가로로 정렬된 썸네일을 flex로 구현 */
  display: grid;
  flex-wrap: nowrap; /* 한 줄로 나열 */
  gap: 10px; /* 썸네일 사이 여백 */
  padding: 10px 0; /* 상하 패딩 추가 */

  a {
  }

  img {
    width: 150px; /* 썸네일 크기 설정 */
    height: 150px;
    object-fit: cover; /* 비율 유지 */
    border-radius: 8px; /* 모서리 둥글게 */
    transition: transform 0.3s ease, filter 0.3s ease; /* 애니메이션 효과 */
  }

  img:hover {
    transform: scale(1.1) rotate(5deg); /* 호버 시 확대 및 회전 효과 */
    filter: brightness(1.2); /* 호버 시 밝기 증가 효과 */
  }
`;
