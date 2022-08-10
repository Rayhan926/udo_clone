import MobileBottomSheet from "@components/MobileBottomSheet";
import CalendarComponent from "@components/SearchWidget/components/CalendarComponent";
import { useOpenDate, useSelectDate } from "@state";
import React from "react";
import { format } from "date-fns";
import { cx } from "@config/constants";

const MobileDateInput = ({ inputClass }: { inputClass?: string }) => {
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
            className={cx("__mobile_input pr-[64px]", inputClass)}
            value={`${format(selectedDate, "dd MMM")}.`}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDateInput;
