import MobileBottomSheet from "@components/MobileBottomSheet";
import CalendarComponent from "@components/SearchWidget/components/CalendarComponent";
import { useOpenDate, useSelectDate } from "@state";
import React from "react";
import { format } from "date-fns";

const MobileDateInput = () => {
  const [open, setOpen] = useOpenDate();
  const [selectedDate, setSelectedDate] = useSelectDate();

  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <label className="__mobile_label">Wann</label>
        <div>
          <input
            type="text"
            readOnly
            className="__mobile_input pr-[64px]"
            value={`${format(selectedDate, "dd MMM")}.`}
          />
        </div>
      </div>

      <MobileBottomSheet open={open} onClose={() => setOpen(false)}>
        <CalendarComponent
          onSelect={(date) => {
            setSelectedDate(date);
            setOpen(false);
          }}
          value={selectedDate}
        />
      </MobileBottomSheet>
    </div>
  );
};

export default MobileDateInput;
