import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/main.jpeg';

const MainImage = () => {
  return <StyledImage src={mainImage} alt="메인이미지" />;
};

export default MainImage;

// 이미지 스타일
const StyledImage = styled.img`
  /* width: 100%; */
  height: 100vh; /* 화면 전체 높이 */
  object-fit: cover; /* 이미지를 컨테이너에 맞게 확장하고 비율 유지 */
`;
