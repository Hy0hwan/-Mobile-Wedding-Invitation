import React from 'react';
import styled from 'styled-components';

const Information = () => {
  return (
    <Container>
      <Title>예식 안내</Title>
      <InfoText>2024년 11월 16일 토요일 오후 05:30</InfoText>
      <InfoText>그레이스파티</InfoText>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #555;
  margin: 5px 0;
  font-family: 'Arial', sans-serif;
`;
