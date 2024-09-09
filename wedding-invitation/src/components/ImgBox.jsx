import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../assets/imgs/1.jpeg';
import img2 from '../assets/imgs/2.jpeg';
import img3 from '../assets/imgs/3.jpeg';
import img5 from '../assets/imgs/5.jpeg';
import img6 from '../assets/imgs/6.jpeg';
import img7 from '../assets/imgs/7.jpeg';
import img8 from '../assets/imgs/8.jpeg';
import img9 from '../assets/imgs/9.jpeg';
import img10 from '../assets/imgs/10.jpeg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img5, img7, img2, img6, img3, img8, img9, img10];

  // 이미지 클릭 시 라이트박스(모달) 띄우기
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // 라이트박스 닫기
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      <h2>웨딩 갤러리</h2>
      <GridContainer>
        {images.map((image, index) => (
          <Thumbnail key={index} onClick={() => openImage(image)}>
            <img src={image} alt={`이미지 ${index + 1}`} />
          </Thumbnail>
        ))}
      </GridContainer>

      {/* 선택한 이미지가 있을 때 라이트박스 모달 */}
      {selectedImage && (
        <Lightbox onClick={closeImage}>
          <img src={selectedImage} alt="확대 이미지" />
        </Lightbox>
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;

const GalleryContainer = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  text-align: center; /* 제목을 가운데 정렬 */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개씩 가로로 배치 */
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3개씩 가로로 배치 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr); /* 3개씩 가로로 배치 */
  }
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1); /* 마우스를 올렸을 때 확대 */
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-width: 90%;
    max-height: 90%;
  }
`;
