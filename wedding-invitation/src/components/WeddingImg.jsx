import React, { useState } from 'react';
import styled from 'styled-components';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <GalleryContainer>
      {images.map((src, index) => (
        <GalleryItem key={index} onClick={() => openLightbox(index)}>
          <img src={src} alt={`Gallery item ${index + 1}`} />
        </GalleryItem>
      ))}
      {isOpen && (
        <SlideshowLightbox
          images={images.map((src) => ({ src }))} // Lightbox에 이미지를 전달
          currentIndex={currentImageIndex}
          onClose={() => setIsOpen(false)}
          enableKeyboardNavigation // 키보드 내비게이션 활성화
          // 전체화면 모드로 전환하기 위한 설정
          enableFullscreen // 전체화면 모드 활성화
        />
      )}
    </GalleryContainer>
  );
};

export default WeddingImg;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    box-sizing: border-box;
  }
`;
