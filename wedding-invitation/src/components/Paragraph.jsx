import React from 'react';
import styled from 'styled-components';
import paragraphImage from '../assets/paragraph.jpeg';

const Paragraph = () => {
  return (
    <StyledContainer>
      <StyledTextHead>우리, 결혼합니다.</StyledTextHead>
      <StyledImage src={paragraphImage} alt="" />
      <StyledText>그냥 좋은 것이</StyledText>
      <StyledText>가장 좋은 것입니다.</StyledText>
      <StyledText>그 때문에 그가 좋은 것이 아니라</StyledText>
      <StyledText>그가 좋아 그 부분이 좋은 것입니다.</StyledText>
      <StyledText>그냥 좋은 것이</StyledText>
      <StyledText>그저 좋은 것입니다.</StyledText>
      <StyledText>
        원태연, <Highlighted>&lt;그냥 좋은 것&gt;</Highlighted>
      </StyledText>
      <StyledText>--</StyledText>
      <StyledText>이희용의 아들 이승원</StyledText>
      <StyledText>
        이경희의 <HiddenLetter>ㄱ</HiddenLetter>딸 임소정
      </StyledText>
    </StyledContainer>
  );
};

export default Paragraph;

// 전체 컨테이너 스타일
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 70%;
`;

const StyledTextHead = styled.p`
  font-size: 24px;
  line-height: 1.6;
  margin: 10px 0;
  text-align: center; /* 각 줄을 가운데 정렬 */
  color: #333;
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

// 숨김 문자 스타일
const HiddenLetter = styled.span`
  visibility: hidden;
`;
