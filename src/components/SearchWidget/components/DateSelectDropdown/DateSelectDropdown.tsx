import CalenderIcon from "@components/Icons/CalenderIcon";
import Tootlip from "@components/Tootlip";
import { useOpenDate, useSelectDate } from "@state";
import React, { useState } from "react";
import CalendarComponent from "../CalendarComponent";
import { format } from "date-fns";

const DateSelectDropdown = () => {
  const [isOpen, setIsOpen] = useOpenDate();
  const [selectedDate, setSelectedDate] = useSelectDate();
  return (
    <div className="bg-white relative border-x-2 border-soft-gray">
      <div
        className="h-16 flex items-center cursor-pointer gap-3.5 px-[26px]"
        onClick={() => setIsOpen(true)}
      >
        <div className="shrink-0">
          <CalenderIcon />
        </div>
        <p className="text-base font-bold text-dark">
          {format(selectedDate, "dd MMM")}.
        </p>
      </div>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[328px]"
      >
        <CalendarComponent
          onSelect={(date) => {
            setSelectedDate(date);
            setIsOpen(false);
          }}
          value={selectedDate}
        />
      </Tootlip>
    </div>
  );
};

export default DateSelectDropdown;
