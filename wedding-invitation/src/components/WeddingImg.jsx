import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
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
  // Create an array of objects for the ImageGallery component
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
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
      />
    </GalleryContainer>
  );
};

export default WeddingImg;

const GalleryContainer = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  margin: 0 auto;

  .image-gallery-slide img {
    border-radius: 8px;
    object-fit: cover;
  }
`;
