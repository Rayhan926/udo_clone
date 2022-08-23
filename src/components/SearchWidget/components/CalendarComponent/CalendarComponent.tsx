import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const months = {
  January: "Januar",
  February: "Februar",
  March: "März",
  April: "April",
  May: "Mai",
  June: "Juni",
  July: "Juli",
  August: "August",
  September: "September",
  October: "Oktober",
  November: "November",
  December: "Dezember",
};

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
        formatMonthYear={(locale, date) =>
          months[format(date, "MMMM") as "January"]
        }
        onChange={(e: Date) => {
          onSelect(e);
        }}
        locale="de"
        value={value}
        prevLabel={<FiChevronLeft size={28} />}
        nextLabel={<FiChevronRight size={28} />}
      />
    </div>
  );
};

export default CalendarComponent;
