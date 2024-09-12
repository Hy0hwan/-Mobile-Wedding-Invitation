import React from 'react';
import styled from 'styled-components';
import paragraphImage from '../assets/paragraph.jpeg';

const Paragraph = () => {
  return (
    <StyledContainer>
      <StyledTextHead>이승원</StyledTextHead>
      <StyledTextHead>임소정</StyledTextHead>
      <StyledTextHead>결혼합니다 !</StyledTextHead>

      <StyledInfoRow>
        <StyledInfoText>info</StyledInfoText>
        <StyledLine />
      </StyledInfoRow>

      <StyledLeftText>2024년 11월 16일, 토요일 오후 5시 20분</StyledLeftText>
      <StyledLeftText>그레이스파티 (신림) 7층</StyledLeftText>

      <StyledImage src={paragraphImage} alt="" />
      <StyledText>운명 같은 우리의 만남이</StyledText>
      <StyledText>사랑의 결실을 맺어 평생 서로의</StyledText>
      <StyledText>울타리가 되어 주고자 합니다</StyledText>
      <StyledText>저희 두 사람이 하나 되는</StyledText>
      <StyledText>그 시작의 자리에 함께</StyledText>
      <StyledText>축복해 주시길 소망합니다.</StyledText>

      <StyledText>--</StyledText>

      <StyledText>이희용의 아들 승원</StyledText>
      <StyledText>
        이경희의 <HiddenLetter>ㄱ</HiddenLetter>딸 소정
      </StyledText>
    </StyledContainer>
  );
};

export default Paragraph;

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
  height: 350px;
`;

const StyledTextHead = styled.p`
  font-size: 30px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  color: #333;
  width: 100%;
  padding-left: 20px;
`;

const StyledInfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
`;

const StyledText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 10px 0;
  text-align: center;
  color: #333;
  margin-right: 10px;
`;

// 왼쪽 정렬할 텍스트 스타일
const StyledLeftText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 10px 0;
  text-align: left;
  width: 100%;
  padding-left: 20px;
  color: #333;
`;

const StyledLine = styled.div`
  flex-grow: 0.9;
  height: 1px;
  background-color: #333;
`;

const Highlighted = styled.span`
  color: #e74c3c;
  font-weight: bold;
`;

const HiddenLetter = styled.span`
  visibility: hidden;
`;

// Info 텍스트에 Blacksword 폰트 적용
const StyledInfoText = styled.p`
  font-family: 'Blacksword', cursive; /* Blacksword 폰트 적용 */
  font-size: 24px; /* 폰트 크기 조정 */
  color: #333;
  margin-right: 10px;
`;
