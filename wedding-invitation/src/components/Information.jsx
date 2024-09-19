import React from 'react';
import styled from 'styled-components';

const Information = () => {
  const fixedDate = new Date(2024, 10, 16, 17, 20); // 2024년 11월 16일 오후 5:20
  const year = fixedDate.getFullYear();
  const month = fixedDate.getMonth(); // 11월 (JavaScript에서 월은 0부터 시작)

  // 해당 월의 첫 번째 날과 마지막 날을 계산
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 날짜 배열을 만들기 위한 함수
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<EmptyDay key={`empty-${i}`} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dayIndex = (firstDay + i - 1) % 7; // 요일 인덱스 계산
      days.push(
        <Day key={i} highlighted={i === 16} isSunday={dayIndex === 0}>
          {i}
        </Day>
      );
    }
    return days;
  };

  return (
    <Container>
      <Header>예식 안내</Header>
      <HeadEn>Information</HeadEn>

      <InfoText>2024년 11월 16일 토요일 오후 05:20</InfoText>
      <InfoText>그레이스파티</InfoText>

      <CalendarContainer>
        <CalendarHeader>11월</CalendarHeader>
        <WeekDays>
          <WeekDay isSunday>일</WeekDay>
          <WeekDay>월</WeekDay>
          <WeekDay>화</WeekDay>
          <WeekDay>수</WeekDay>
          <WeekDay>목</WeekDay>
          <WeekDay>금</WeekDay>
          <WeekDay>토</WeekDay>
        </WeekDays>
        <DaysContainer>{generateCalendarDays()}</DaysContainer>
      </CalendarContainer>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 20px auto;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-weight: 600;
`;

const HeadEn = styled.p`
  font-family: 'Blacksword', cursive;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -15px;
  color: #bbb;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #666;
  margin: 10px 0;
  font-weight: 300;
`;

const CalendarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  pointer-events: no;
`;

const CalendarHeader = styled.h3`
  margin-bottom: 20px;
  font-size: 22px;
  color: #ffc0cb;
`;

const WeekDays = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const WeekDay = styled.div`
  width: 14.2%;
  text-align: center;
  font-weight: bold;
  color: ${({ isSunday }) =>
    isSunday ? '#ffc0cb' : '#666'}; // 일요일은 빨간색
`;

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ highlighted, isSunday }) =>
    highlighted ? '#fff' : isSunday ? '#ffc0cb' : '#333'}; // 일요일은 빨간색
  background-color: ${({ highlighted }) =>
    highlighted ? '#ffb6c1' : 'transparent'};
  border-radius: 50%;
  margin: 2px 0;
  transition: background-color 0.3s ease;
  font-weight: ${({ highlighted }) => (highlighted ? 'bold' : 'normal')};

  &:hover {
    background-color: #ffb6c1;
    color: white;
  }
`;

const EmptyDay = styled.div`
  width: 14.2%;
  height: 40px;
  margin: 2px 0;
  visibility: hidden;
`;
