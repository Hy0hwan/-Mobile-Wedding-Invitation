import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowImg from '../assets/imgs/pngwing.com.png'; // 이미지 경로를 맞게 설정하세요

const AccountDetails = () => {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const [isBrideOpen, setIsBrideOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 클립보드에 계좌번호 복사
  const handleCopy = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // 3초 후 복사 상태 초기화
      })
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  const groomAccount = '국민 933502-00-251261';
  const groomFAccount = '국민 837-21-0049-680';
  const brideAccount = '신한 110-436-378297';
  const brideMAccount = '신한 110-030-449237';

  return (
    <Container>
      <Title>마음 전하실 곳</Title>

      <Accordion>
        <AccordionHeader onClick={() => setIsGroomOpen(!isGroomOpen)}>
          신랑 측
          <Arrow isOpen={isGroomOpen} src={ArrowImg} alt="arrow" />
        </AccordionHeader>
        <AccordionContent isOpen={isGroomOpen}>
          <AccountRow>
            <BoldText>[신랑] </BoldText>
            <AccountNumber onClick={() => handleCopy(groomAccount)}>
              {groomAccount}
            </AccountNumber>
          </AccountRow>
          <AccountRow>
            <BoldText>[혼주] </BoldText>
            <AccountNumber onClick={() => handleCopy(groomFAccount)}>
              {groomFAccount}
            </AccountNumber>
          </AccountRow>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionHeader onClick={() => setIsBrideOpen(!isBrideOpen)}>
          신부 측
          <Arrow isOpen={isBrideOpen} src={ArrowImg} alt="arrow" />
        </AccordionHeader>
        <AccordionContent isOpen={isBrideOpen}>
          <AccountRow>
            <BoldText>[신부] </BoldText>
            <AccountNumber onClick={() => handleCopy(brideAccount)}>
              {brideAccount}
            </AccountNumber>
          </AccountRow>
          <AccountRow>
            <BoldText>[혼주] </BoldText>
            <AccountNumber onClick={() => handleCopy(brideMAccount)}>
              {brideMAccount}
            </AccountNumber>
          </AccountRow>
        </AccordionContent>
      </Accordion>

      <Toast visible={copied}>클립보드에 복사되었습니다!</Toast>
    </Container>
  );
};

export default AccountDetails;

const Container = styled.div`
  padding: 40px 20px;
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 22px;
  /* color: #ffb6c1; */
  margin-bottom: 45px;
`;

const Accordion = styled.div`
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div`
  font-size: 16px;
  font-weight: 900;
  background-color: #e9ecef;
  color: #333;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dee2e6;
  }
`;

const AccordionContent = styled.div`
  background-color: #fff;
  padding: ${({ isOpen }) => (isOpen ? '20px' : '0')};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  font-size: 15px;
  color: #555;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: padding 0.3s ease, height 0.3s ease;
`;

const AccountRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Arrow = styled.img`
  width: 26px;
  height: 26px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const AccountNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const BoldText = styled.span`
  font-weight: bold; /* 글씨 굵게 */
`;

const Toast = styled.div`
  position: fixed;
  bottom: ${({ visible }) => (visible ? '30px' : '-100px')};
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  transition: bottom 0.3s ease, opacity 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  font-family: 'BMJUA', sans-serif;
`;
