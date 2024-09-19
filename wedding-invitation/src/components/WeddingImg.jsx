import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/imgs/1.jpeg';
import img2 from '../assets/imgs/2.jpeg';
import img4 from '../assets/imgs/4.png';
import img5 from '../assets/imgs/5.jpeg';
import img6 from '../assets/imgs/6.jpeg';
import img7 from '../assets/imgs/7.jpeg';
import img8 from '../assets/imgs/8.jpeg';
import img9 from '../assets/imgs/9.jpeg';
import img10 from '../assets/imgs/10.jpeg';

const WeddingImg = () => {
  const images = [img1, img5, img7, img2, img6, img8, img9, img10, img4];

  return (
    <GalleryContainer>
      {images.map((src, index) => (
        <GalleryItem key={index}>
          <img src={src} alt={`Gallery item ${index + 1}`} />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default WeddingImg;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 항상 3열로 설정 */
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box; /* 패딩이 컨테이너 너비를 초과하지 않도록 설정 */
  margin: 0 auto;

  @media (max-width: 600px) {
    /* 작은 화면에서도 여전히 3x3 레이아웃 유지 */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* 정사각형 비율 유지 */
  aspect-ratio: 1 / 1;
  box-sizing: border-box; /* 패딩이 크기에 영향을 미치지 않도록 설정 */
  padding: 0; /* 기본 패딩 제거 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너를 왜곡 없이 덮도록 설정 */
    display: block;
    box-sizing: border-box; /* 패딩이 크기에 영향을 미치지 않도록 설정 */
  }
`;
