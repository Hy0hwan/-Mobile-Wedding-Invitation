import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return (
    <Container>
      <Text>11월 16일</Text>
      <Line />
    </Container>
  );
};

export default Divider;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: 14px;
  color: #ffb6c1; /* 글자 색상 */
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ddd; /* 구분선 색상 */
  margin: 0; /* 구분선 위아래 여백 */
`;
