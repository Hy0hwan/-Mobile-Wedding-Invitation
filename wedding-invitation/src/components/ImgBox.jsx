import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/imgs/1.jpeg';
import img2 from '../assets/imgs/2.jpeg';
import img4 from '../assets/imgs/4.png';
import img5 from '../assets/imgs/5.jpeg';
import img6 from '../assets/imgs/6.jpeg';
import img7 from '../assets/imgs/7.jpeg';
import img8 from '../assets/imgs/8.jpeg';
import img9 from '../assets/imgs/9.jpeg';
import img10 from '../assets/imgs/10.jpeg';

const ImgBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [img1, img5, img7, img2, img6, img8, img9, img10, img4];

  const openModal = (src) => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: images.indexOf(currentImage),
  };

  return (
    <GalleryContainer>
      <Header>웨딩 갤러리</Header>
      <HeadEn>Gallery</HeadEn>
      <GalleryGrid>
        {images.map((src, index) => (
          <GalleryItem key={index} onClick={() => openModal(src)}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Enlarged view ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </ModalContent>
        </ModalOverlay>
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

const HeadEn = styled.p`
  font-family: 'Blacksword', cursive;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -15px;
  color: #bbb;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover img {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%; /* Adjust width as needed */
  height: 80%; /* Adjust height as needed */
  background: white;
  border-radius: 8px;
  overflow: hidden;

  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Adjust image fit within the slider */
  }

  .slick-dots {
    bottom: 10px;
  }
`;
