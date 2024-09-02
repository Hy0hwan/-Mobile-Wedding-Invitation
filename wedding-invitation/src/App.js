import React from 'react';
import styled from 'styled-components';
import MainImage from './components/MainImage';

function App() {
  return (
    <Container>
      <MainImage />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  max-width: 780px;
  width: 100%; /* 화면에 맞춰 유연하게 조정 */
  margin: 0 auto; /* 데스크탑에서 가운데 정렬 */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
