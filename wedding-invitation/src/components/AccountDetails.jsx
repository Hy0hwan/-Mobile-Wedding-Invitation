import React, { useState } from 'react';
import styled from 'styled-components';

const AccountDetails = () => {
  const [copied, setCopied] = useState(false);

  // 클립보드에 계좌번호 복사
  const handleCopy = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2초 후 복사 상태 초기화
      })
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  const accountNumber = '123-456-7890'; // 계좌번호

  return (
    <Container>
      <Title>마음 전하실 곳</Title>
      <AccountInfo>
        <span>계좌번호: </span>
        <AccountNumber onClick={() => handleCopy(accountNumber)}>
          {accountNumber}
        </AccountNumber>
      </AccountInfo>
      {copied && <CopiedMessage>계좌번호가 복사되었습니다!</CopiedMessage>}
    </Container>
  );
};

export default AccountDetails;

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const AccountInfo = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const AccountNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CopiedMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: green;
`;
