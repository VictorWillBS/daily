import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import generateDate from "../../functions/generateDate";
import { useNavigate } from "react-router-dom";
export default function CalendarContent() {
  const navigate = useNavigate();
  function navigateToPage(date) {
    const today = new Date();
    const dateToGo = new Date(date);
    if (dateToGo > today) {
      return;
    }
    navigate(`/day/${date}`);
  }
  return (
    <CalendarContainer>
      <Calendar
        onClickDay={(date, e) => {
          navigateToPage(generateDate(date));
        }}
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
