// components/AnimatedComponent.js
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const AnimatedSection = styled.div`
  opacity: 0;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${fadeIn} 1s ease-out forwards;
    `}
`;

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한번만 트리거
    threshold: 0.1, // 10% 보일 때 애니메이션 시작
  });

  return (
    <AnimatedSection ref={ref} inView={inView}>
      {children}
    </AnimatedSection>
  );
};

export default AnimatedComponent;
