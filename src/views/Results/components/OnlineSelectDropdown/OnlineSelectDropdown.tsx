import Tootlip from "@components/Tootlip";
import { cx } from "@config/constants";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import OnlineOptionsSelect from "../OnlineOptionsSelect";

const OnlineSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="outline-none border-none hover:bg-gray/20 duration-150 px-5 py-2 gap-1.5 rounded-full bg-soft-gray text-dark flex items-center text-[15px]"
      >
        Online{" "}
        <AiFillCaretDown
          size={14}
          className={cx("duration-100 text-gray", isOpen && "rotate-180")}
        />
      </button>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[220px]"
      >
        <div className="p-6 pt-3">
          <OnlineOptionsSelect />
        </div>
      </Tootlip>
    </div>
  );
};

export default OnlineSelectDropdown;
