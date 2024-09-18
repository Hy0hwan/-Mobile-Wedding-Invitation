import React, { useRef } from 'react';
import styled from 'styled-components';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

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
  const galleryRef = useRef(null);

  const images = [img1, img5, img7, img2, img6, img8, img9, img10, img4];

  return (
    <GalleryContainer>
      <Header>웨딩 갤러리</Header>
      <HeadEn>Gallery</HeadEn>
      <ImgContainer>
        <LightGallery
          ref={galleryRef}
          plugins={[lgThumbnail, lgFullscreen, lgZoom]}
          speed={500}
        >
          {images.map((image, index) => (
            <Thumbnail key={index} data-src={image} data-thumb={image}>
              <img src={image} alt={`우리 사진 ${index + 1}`} />
            </Thumbnail>
          ))}
        </LightGallery>
      </ImgContainer>
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

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px; /* 썸네일 사이의 간격 */

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 중간 크기 화면에서 3개씩 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr); /* 작은 화면에서 2개씩 */
  }
`;

const Thumbnail = styled.a`
  display: block;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  width: 100%;
  padding-top: 100%; /* Maintains square aspect ratio */
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure image covers thumbnail area */
  }

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;
