import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const FireworksEffect = () => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
    const timer = setTimeout(() => setIsRunning(false), 9000); // 7초 후 폭죽 종료

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isRunning && (
        <Confetti
          numberOfPieces={100} // 컨페티 조각 수 (기본값 200)
          colors={['#ffb3ba', '#ffdfba', '#bae1ff', '#c7ceea', '#b5ead7']} // 파스텔톤 색상 배열
          gravity={0.05} // 컨페티가 떨어지는 속도
          wind={0.01} // 컨페티가 흩날리는 정도
        />
      )}
    </>
  );
};

export default FireworksEffect;
