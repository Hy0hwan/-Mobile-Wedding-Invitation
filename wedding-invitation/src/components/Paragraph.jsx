import React from 'react';
import styled from 'styled-components';
import paragraphImage from '../assets/paragraph.jpeg';

const Paragraph = () => {
  return (
    <StyledContainer>
      <StyledText>우리, 결혼합니다.</StyledText>
      <StyledImage src={paragraphImage} alt="" />
      <StyledText>그냥 좋은 것이</StyledText>
      <StyledText>가장 좋은 것입니다.</StyledText>
      <StyledText>그 때문에 그가 좋은 것이 아니라</StyledText>
      <StyledText>그가 좋아 그 부분이 좋은 것입니다.</StyledText>
      <StyledText>그냥 좋은 것이</StyledText>
      <StyledText>그저 좋은 것입니다.</StyledText>
      <StyledText>
        원태연, <Highlighted>그냥 좋은 것</Highlighted>
      </StyledText>
    </StyledContainer>
  );
};

export default Paragraph;

// 전체 컨테이너 스타일
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* background-color: #ffffff; */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50vh;
`;

// 텍스트 스타일
const StyledText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 10px 0;
  text-align: center; /* 각 줄을 가운데 정렬 */
  color: #333;
`;

// 강조된 텍스트 스타일
const Highlighted = styled.span`
  color: #e74c3c; /* 강조 색상 */
  font-weight: bold;
`;
