// import React from 'react';
// import styled from 'styled-components';
// import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
// import 'lightgallery/css/lightgallery.css';

// import img1 from '../assets/imgs/1.jpeg';
// import img2 from '../assets/imgs/2.jpeg';
// import img4 from '../assets/imgs/4.png';
// import img5 from '../assets/imgs/5.jpeg';
// import img6 from '../assets/imgs/6.jpeg';
// import img7 from '../assets/imgs/7.jpeg';
// import img8 from '../assets/imgs/8.jpeg';
// import img9 from '../assets/imgs/9.jpeg';
// import img10 from '../assets/imgs/10.jpeg';

// const WeddingImg = () => {
//   const images = [img1, img5, img7, img2, img6, img8, img9, img10, img4];

//   return (
//     <LightgalleryProvider>
//       <GalleryContainer>
//         {images.map((src, index) => (
//           <LightgalleryItem
//             key={index}
//             group="gallery"
//             src={src} // Full-size image for the lightbox
//             thumb={src} // Thumbnail image (can be the same)
//           >
//             <GalleryItem>
//               <img src={src} alt={`Gallery item ${index + 1}`} />
//             </GalleryItem>
//           </LightgalleryItem>
//         ))}
//       </GalleryContainer>
//     </LightgalleryProvider>
//   );
// };

// export default WeddingImg;

// const GalleryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
//   padding: 10px;
//   width: 100%;
//   max-width: 100vw;
//   box-sizing: border-box;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); // 2열로 조정
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr; // 1열로 조정
//   }
// `;

// const GalleryItem = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   aspect-ratio: 1 / 1;
//   box-sizing: border-box;
//   padding: 0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//     box-sizing: border-box;
//   }
// `;
