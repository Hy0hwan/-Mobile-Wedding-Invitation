import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';
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
  const images = [
    { original: img1, thumbnail: img1 },
    { original: img5, thumbnail: img5 },
    { original: img7, thumbnail: img7 },
    { original: img2, thumbnail: img2 },
    { original: img6, thumbnail: img6 },
    { original: img8, thumbnail: img8 },
    { original: img9, thumbnail: img9 },
    { original: img10, thumbnail: img10 },
    { original: img4, thumbnail: img4 },
  ];

  return (
    <GalleryContainer>
      <Header>웨딩 갤러리</Header>
      <HeadEn>Gallery</HeadEn>
      <Gallery items={images} />
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
