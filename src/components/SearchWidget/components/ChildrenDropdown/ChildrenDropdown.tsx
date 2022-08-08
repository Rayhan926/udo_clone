import SmileIcon from "@components/Icons/SmileIcon";
import Tootlip from "@components/Tootlip";
import { cx } from "@config/constants";
import { useOpenChildren, useSelectChildren } from "@state";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ChildrenSelect from "../ChildrenSelect";

const ChildrenDropdown = () => {
  const [selectedChildrenOptions] = useSelectChildren();
  const hasSelected = selectedChildrenOptions.length > 0;

  const [isOpen, setIsOpen] = useOpenChildren();
  return (
    <div className="bg-white rounded-r-[10px] relative w-full">
      <div
        className="h-16 flex w-full items-center px-[26px] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="shrink-0">
          <SmileIcon />
        </div>
        <div
          className={cx(
            "grow pl-3.5",
            hasSelected ? "text-dark font-bold line-clamp-1" : "text-gray"
          )}
        >
          {hasSelected
            ? selectedChildrenOptions.map((e) => e.label).join(", ")
            : "Kinder?"}
        </div>
        <div
          className={cx("text-gray/90 duration-150", isOpen && "rotate-180")}
        >
          <AiFillCaretDown />
        </div>
      </div>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-[calc(100%+8px)] left-0 w-full"
      >
        <ChildrenSelect onSelect={() => setIsOpen(false)} />
      </Tootlip>
    </div>
  );
};

export default ChildrenDropdown;
