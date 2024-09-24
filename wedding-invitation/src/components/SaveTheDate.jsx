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
          <Header>결혼식 까지</Header>
          <HeadEn>D-Day</HeadEn>
          <Countdown>
            <TimeUnit>
              <TimeNumber>{timeLeft.days}</TimeNumber>
              <TimeLabel>Days</TimeLabel>
            </TimeUnit>
            <Colon>:</Colon>
            <TimeUnit>
              <TimeNumber>{timeLeft.hours}</TimeNumber>
              <TimeLabel>Hours</TimeLabel>
            </TimeUnit>
            <Colon>:</Colon>
            <TimeUnit>
              <TimeNumber>{timeLeft.minutes}</TimeNumber>
              <TimeLabel>Min</TimeLabel>
            </TimeUnit>
            <Colon>:</Colon>
            <TimeUnit>
              <TimeNumber>{timeLeft.seconds}</TimeNumber>
              <TimeLabel>Sec</TimeLabel>
            </TimeUnit>
          </Countdown>
        </>
      )}
      <Comment>
        {isDday
          ? '승원 ❤️ 소정의 결혼식에 오셔서 축하해주세요.'
          : `승원 ❤️ 소정의 결혼식이 `}
        <Highlighted>{timeLeft.days + 1}일</Highlighted>
        {isDday ? '' : ' 남았습니다.'}
      </Comment>
    </Container>
  );
};

export default SaveTheDate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 50px;
`;

const Header = styled.p`
  text-align: center;
  font-size: 22px;
  color: #333;
  position: relative;
  font-weight: bold;
`;

const HeadEn = styled.p`
  font-family: 'Blacksword', cursive;
  font-size: 14px;
  margin-bottom: 40px;
  margin-top: -15px;
  color: #bbb;
`;

const Comment = styled.p`
  font-size: 1.2rem;
  color: #333; /* 텍스트 색상을 기본 회색으로 설정 */
  margin-top: 40px; /* 위쪽 여백 추가 */
  font-size: 16px;
`;

const Highlighted = styled.span`
  color: #ffb6c1; /* 강조할 색상 */
  font-weight: bold; /* 텍스트 두껍게 설정 */
`;

const Countdown = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  gap: 5px; /* 시간 단위 사이의 간격을 줄임 */
`;

const TimeUnit = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

const TimeNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const TimeLabel = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const Colon = styled.span`
  font-size: 1.5rem; /* 콜론의 크기 */
  font-weight: bold; /* 콜론을 두껍게 */
  color: #333; /* 콜론 색상 */
`;

const DdayMessage = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffb6c1; /* 특별한 색상으로 강조 */
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
