import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Information = () => {
  const fixedDate = new Date(2024, 10, 16); // 2024년 11월 16일
  const [startDate, setStartDate] = useState(fixedDate);

  return (
    <Container>
      <Title>예식 안내</Title>
      <InfoText>2024년 11월 16일 토요일 오후 05:30</InfoText>
      <InfoText>그레이스파티</InfoText>
      {/* 
      <CalendarContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          minDate={fixedDate}
          maxDate={fixedDate}
          highlightDates={[fixedDate]} // 강조할 날짜 설정
          showPopperArrow={false} // 화살표 숨기기
          disabledKeyboardNavigation // 키보드 내비게이션 비활성화
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          calendarClassName="custom-calendar"
        />
      </CalendarContainer> */}
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

const CalendarContainer = styled.div`
  margin-top: 20px;

  .react-datepicker {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: 'Arial', sans-serif;
  }

  .react-datepicker__header {
    background-color: #ff4500;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
    border: none;
    padding: 10px;
  }

  .react-datepicker__current-month {
    font-size: 18px;
    font-weight: bold;
  }

  .react-datepicker__day {
    border-radius: 50%;
  }

  .react-datepicker__day--highlighted {
    background-color: #ff4500;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--selected {
    background-color: #ff4500;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #ff4500;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--disabled {
    background-color: #e0e0e0;
    color: #bdbdbd;
  }

  .custom-calendar .react-datepicker__day--disabled {
    background-color: #e0e0e0;
    color: #bdbdbd;
  }
`;
