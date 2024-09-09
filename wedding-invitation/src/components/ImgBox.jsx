import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img5, img7, img2, img6, img3, img8, img9, img10, img4];

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
      <Header>웨딩 갤러리</Header>
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

export default ImgBox;

const GalleryContainer = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.p`
  text-align: center;
  font-size: 28px;
  color: #333;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:hover img {
    transform: scale(1.15);
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
  opacity: 0;
  animation: fadeIn 0.4s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    animation: zoomIn 0.3s ease;

    @keyframes zoomIn {
      from {
        transform: scale(0.8);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;
