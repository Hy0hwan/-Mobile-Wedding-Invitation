// import React, { useState } from 'react';
import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Information = () => {
  // const fixedDate = new Date(2024, 10, 16); // 2024년 11월 16일
  // const [startDate, setStartDate] = useState(fixedDate);

  return (
    <Container>
      <Header>예식 안내</Header>
      <InfoText>2024년 11월 16일 토요일 오후 05:20</InfoText>
      <InfoText>그레이스파티</InfoText>

      {/* <CalendarContainer>
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
  padding: 30px;

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

const InfoText = styled.p`
  font-size: 18px;
  color: #666;
  margin: 10px 0;
  font-weight: 300;
`;

// const CalendarContainer = styled.div`
//   margin-top: 20px;

//   .react-datepicker {
//     border: none;
//     border-radius: 12px;
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//     font-family: 'Arial', sans-serif;
//     background: #fff;
//   }

//   .react-datepicker__header {
//     background-color: #ff4500;
//     border: none;
//     color: white;
//     border-radius: 12px 12px 0 0;
//     padding: 10px;
//     font-weight: 600;
//   }

//   .react-datepicker__current-month {
//     font-size: 20px;
//   }

//   .react-datepicker__day {
//     border-radius: 50%;
//     color: #333;
//   }

//   .react-datepicker__day--highlighted {
//     background-color: #ff4500;
//     color: white;
//   }

//   .react-datepicker__day--selected {
//     background-color: #ff4500;
//     color: white;
//   }

//   .react-datepicker__day--keyboard-selected {
//     background-color: #ff4500;
//     color: white;
//   }

//   .react-datepicker__day--disabled {
//     background-color: #f0f0f0;
//     color: #bdbdbd;
//   }
// `;
