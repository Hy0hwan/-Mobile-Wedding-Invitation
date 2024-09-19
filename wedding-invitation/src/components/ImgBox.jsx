import React from 'react';
import styled from 'styled-components';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';

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
  const images = [img1, img5, img7, img2, img6, img8, img9, img10, img4];

  return (
    <GalleryContainer>
      <Header>웨딩 갤러리</Header>
      <HeadEn>Gallery</HeadEn>
      <LightgalleryProvider
        speed={500}
        plugins={['lg-thumbnail', 'lg-fullscreen', 'lg-zoom']}
      >
        <GalleryGrid>
          {images.map((src, index) => (
            <GalleryItem key={index}>
              <LightgalleryItem
                src={src}
                thumb={src} // 썸네일 이미지 사용
                data-sub-html={`<h4>Image ${index + 1}</h4>`}
              >
                <img src={src} alt={`Gallery item ${index + 1}`} />
              </LightgalleryItem>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </LightgalleryProvider>
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
  grid-template-columns: repeat(
    auto-fill,
    minmax(100px, 1fr)
  ); /* Adjust grid size for mobile */
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
  aspect-ratio: 1 / 1; /* Maintain a square aspect ratio */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain the aspect ratio while covering the container */
    display: block;
  }

  &:hover img {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;
