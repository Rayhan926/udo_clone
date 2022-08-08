import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

const CalendarComponent = ({
  onSelect,
  value,
}: {
  onSelect: (e: Date) => void;
  value: Date;
}) => {
  return (
    <div className="p-4 rounded-[10px]">
      <Calendar
        next2Label={null}
        prev2Label={null}
        minDate={firstDay}
        formatMonthYear={(locale, date) => format(date, "MMMM")}
        onChange={(e: Date) => {
          onSelect(e);
        }}
        value={value}
        prevLabel={<FiChevronLeft size={28} />}
        nextLabel={<FiChevronRight size={28} />}
      />
    </div>
  );
};

export default CalendarComponent;
