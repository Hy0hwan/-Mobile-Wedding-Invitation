import React, { useState } from 'react';
import styled from 'styled-components';

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

  // 신랑, 신부 계좌 정보
  const groomAccount = '국민 933-502-0025-1261'; // 신랑 계좌번호
  const groomFAccount = '국민 837-21-0049-680 ';
  const brideAccount = '신한 110-436-378297 '; // 신부 계좌번호
  const brideMAccount = '신한 110-030-449237';

  return (
    <Container>
      <Title>마음 전하실 곳</Title>

      {/* 신랑측 계좌 아코디언 */}
      <Accordion>
        <AccordionHeader onClick={() => setIsGroomOpen(!isGroomOpen)}>
          신랑 측<Arrow isOpen={isGroomOpen}></Arrow>
        </AccordionHeader>
        <AccordionContent isOpen={isGroomOpen}>
          <span>[신랑] </span>
          <AccountNumber onClick={() => handleCopy(groomAccount)}>
            {groomAccount}
          </AccountNumber>
        </AccordionContent>{' '}
        <AccordionContent isOpen={isGroomOpen}>
          <span>[혼주] </span>
          <AccountNumber onClick={() => handleCopy(groomAccount)}>
            {groomAccount}
          </AccountNumber>
        </AccordionContent>
      </Accordion>

      {/* 신부측 계좌 아코디언 */}
      <Accordion>
        <AccordionHeader onClick={() => setIsBrideOpen(!isBrideOpen)}>
          신부 축<Arrow isOpen={isBrideOpen}></Arrow>
        </AccordionHeader>
        <AccordionContent isOpen={isBrideOpen}>
          <span>[신부] </span>
          <AccountNumber onClick={() => handleCopy(brideAccount)}>
            {brideAccount}
          </AccountNumber>
        </AccordionContent>
        <AccordionContent isOpen={isBrideOpen}>
          <span>[혼주] </span>
          <AccountNumber onClick={() => handleCopy(brideAccount)}>
            {brideAccount}
          </AccountNumber>
        </AccordionContent>
      </Accordion>

      {/* 토스트 메시지 */}
      <Toast visible={copied}>클립보드에 복사되었습니다!</Toast>
    </Container>
  );
};

export default AccountDetails;

const Container = styled.div`
  padding: 30px;
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #ffb6c1;
  margin-bottom: 30px;
`;

const Accordion = styled.div`
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: #cbcbcb; /* 더 세련된 파란색 */
  color: #333;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  /* font-family: 'BMJUA', sans-serif; */
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center; /* 텍스트 가운데 정렬 */
`;

const AccordionContent = styled.div`
  background-color: #f8f9fa;
  padding: ${({ isOpen }) => (isOpen ? '20px' : '0')};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  font-size: 14px;
  color: #555;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: padding 0.3s ease, height 0.3s ease;
  text-align: center; /* 텍스트 가운데 정렬 */
`;

const Arrow = styled.span`
  font-size: 16px;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg);
  `}
`;

const AccountNumber = styled.span`
  font-weight: bold;
  color: #3b3b3b;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: ${({ visible }) => (visible ? '30px' : '-100px')}; /* 토스트 위치 */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-family: 'BMJUA', sans-serif;
  font-size: 13px;
  transition: bottom 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* 나타날 때 투명도 */
`;
