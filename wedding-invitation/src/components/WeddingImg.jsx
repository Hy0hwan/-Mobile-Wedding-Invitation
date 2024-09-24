import React, { useState } from 'react';
import styled from 'styled-components';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // 스타일 추가

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
    <div>
      <Header>갤러리</Header>
      <HeadEn>Gallery</HeadEn>
      <GalleryContainer>
        {images.map((src, index) => (
          <GalleryItem key={index} onClick={() => openLightbox(index)}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </GalleryItem>
        ))}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map((src) => ({ src }))} // Lightbox에 이미지를 전달
            currentIndex={currentImageIndex}
            onCurrentIndexChange={setCurrentImageIndex} // 현재 인덱스 변경 핸들러
            // 추가적인 옵션을 여기에 설정할 수 있습니다.
          />
        )}
      </GalleryContainer>
    </div>
  );
};

export default WeddingImg;

const Header = styled.h2`
  text-align: center;
  font-size: 22px;
  color: #333;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-weight: 600;
`;

const HeadEn = styled.p`
  font-family: 'Blacksword', cursive;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -15px;
  color: #bbb;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
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
