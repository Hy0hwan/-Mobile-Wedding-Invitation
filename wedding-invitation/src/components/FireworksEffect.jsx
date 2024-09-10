import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const FireworksEffect = () => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때 바로 폭죽 시작
    setIsRunning(true);
    const timer = setTimeout(() => setIsRunning(false), 7000); // 7초 후 폭죽 종료

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  return <>{isRunning && <Confetti />}</>;
};

export default FireworksEffect;
