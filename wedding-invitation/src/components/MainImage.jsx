import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/main.jpeg';

const MainImage = () => {
  return (
    <ImageContainer>
      <StyledImage src={mainImage} alt="메인이미지" />
    </ImageContainer>
  );
};

export default MainImage;

// 이미지 컨테이너 스타일
const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden; // 이미지가 컨테이너를 넘어가지 않도록 설정
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 이미지 스타일
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지를 컨테이너에 맞게 확장하고 비율 유지
  border-radius: 0; // 둥근 모서리를 없앰
  box-shadow: none; // 그림자 없앰 (선택 사항)
`;
