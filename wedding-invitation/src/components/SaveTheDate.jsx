import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isDday, setIsDday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      // Check if it is D-Day
      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        setIsDday(true);
      } else {
        setIsDday(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const weddingDate = new Date('2024-11-16T00:00:00'); // 결혼식 날짜 설정
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      // If the difference is 0 or negative, it's D-Day or past
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <Container>
      {isDday ? (
        <DdayMessage>🎉 D-Day! 🎉</DdayMessage>
      ) : (
        <>
          <Title>결혼식까지 남은 시간</Title>
          <Countdown>
            <TimeUnit>
              <TimeNumber>{timeLeft.days}</TimeNumber>
              <TimeLabel>Days</TimeLabel>
            </TimeUnit>
            <TimeUnit>
              <TimeNumber>{timeLeft.hours}</TimeNumber>
              <TimeLabel>Hours</TimeLabel>
            </TimeUnit>
            <TimeUnit>
              <TimeNumber>{timeLeft.minutes}</TimeNumber>
              <TimeLabel>Minutes</TimeLabel>
            </TimeUnit>
            <TimeUnit>
              <TimeNumber>{timeLeft.seconds}</TimeNumber>
              <TimeLabel>Seconds</TimeLabel>
            </TimeUnit>
          </Countdown>
        </>
      )}
    </Container>
  );
};

export default SaveTheDate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Countdown = styled.div`
  display: flex;
  gap: 10px;
`;

const TimeUnit = styled.div`
  text-align: center;
  font-size: 1.5rem;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimeNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const TimeLabel = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const DdayMessage = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff4500; /* 특별한 색상으로 강조 */
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
