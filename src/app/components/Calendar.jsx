import React from "react";
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from "date-fns";
//import styles from "./styles/Calender.module.css"
import styles from "../styles/Calendar.module.css";

const Calendar = ({ date }) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const rows = [];
  const currentDate = new Date(); // Get the current date

  let day = startDate;

  while (day <= endDate) {
    let cells = [];
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, dateFormat);
      const isCurrentDate = isSameDay(day, currentDate); // Check if the date is the current date
      cells.push(
        <td
          key={day}
          className={`${styles.dayCell} ${!isSameMonth(day, monthStart) ? styles.disabled : ""} ${
            isCurrentDate ? styles.currentDate : ""
          }`}
        >
          {formattedDate}
        </td>
      );
      day = addDays(day, 1);
    }
    rows.push(<tr key={day}>{cells}</tr>);
  }
  const monthName = format(monthStart, "MMMM");
  const yearNumber = format(monthStart, "yyyy");

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.monthYearContainer}>
        <div className={styles.monthYearText}>
          <div className={styles.monthName}>{monthName}</div>
          <div className={styles.line}></div>
          <div className={styles.yearNumber}>{yearNumber}</div>
        </div>
      </div>
      <table className={styles.calendar}>
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day} className={styles.dayHeader}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Calendar;