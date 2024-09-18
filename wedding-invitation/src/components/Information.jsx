import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale'; // Import Korean locale

const Information = () => {
  const fixedDate = new Date(2024, 10, 16, 17, 20); // 2024년 11월 16일 오후 5:20
  const [startDate, setStartDate] = useState(fixedDate);

  // 날짜에 클래스를 추가하여 스타일을 조정
  const dayClassName = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    if (month === 10 && day >= 27 && day <= 31) {
      return 'hide-day';
    }
    return '';
  };

  return (
    <Container>
      <Header>예식 안내</Header>
      <HeadEn>Information</HeadEn>

      <InfoText>2024년 11월 16일 토요일 오후 05:20</InfoText>
      <InfoText>그레이스파티</InfoText>

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
          dayClassName={dayClassName} // 날짜에 클래스 추가
          locale={ko} // 언어 설정
        />
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

  .react-datepicker {
    border: none;
    border-radius: 12px;
    background: #fff;
    font-family: 'BMJUA', sans-serif;
    pointer-events: none; /* 클릭 이벤트를 차단합니다 */
  }

  .react-datepicker__header {
    background-color: transparent;
    border-bottom: 1px solid #e0e0e0;
    color: #333;
    padding: 10px;
    font-weight: 600;
  }

  .react-datepicker__current-month {
    font-size: 18px;
    color: #333;
  }

  .react-datepicker__day {
    border-radius: 50%;
    color: #333;
    font-size: 16px;
    margin: 2px;
    transition: background-color 0.3s ease;
  }

  /* 숨기기 클래스 */
  .hide-day {
    visibility: hidden;
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #ffb6c1;
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: #ffb6c1;
    color: white;
  }

  .react-datepicker__day--disabled {
    color: #bdbdbd;
  }

  .react-datepicker__time-list-item--selected {
    background-color: #ffb6c1 !important;
    color: white !important;
  }
`;
