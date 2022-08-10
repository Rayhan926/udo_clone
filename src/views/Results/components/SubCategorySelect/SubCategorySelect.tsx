import Tootlip from "@components/Tootlip";
import { cx, subCategoriesOptions } from "@config/constants";
import { PriceType } from "@config/types";
import { useSubCatogories } from "@state";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const SubCategorySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useSubCatogories();

  const hasSelected = selectedSubCategories.length > 0;

  const handleSelect = ({ label, value }: PriceType) => {
    setSelectedSubCategories((prev) => {
      if (prev.find((e) => e.value === value)) {
        return prev.filter((each) => each.value !== value);
      }
      return [...prev, { value, label }];
    });
  };
  return (
    <div className="relative inline-block">
      <div
        className={cx(
          "outline-none border-none overflow-hidden rounded-full flex items-center text-[15px]",
          hasSelected ? "bg-secondary/20" : "bg-soft-gray text-dark",
        )}
      >
        <div
          className={cx(
            "duration-150 py-2 pl-3.5 pr-1.5 cursor-pointer",
            !hasSelected && "hover:bg-gray/20",
          )}
          onClick={() => setSelectedSubCategories([])}
        >
          <IoCloseSharp size={20} className="text-gray" />
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className={cx(
            "flex items-center gap-1.5 duration-150 py-2 pl-2 pr-5 cursor-pointer",
            !hasSelected && "hover:bg-gray/20",
          )}
        >
          <span className={cx(hasSelected && "text-secondary")}>
            Unterkategorien
          </span>
          <AiFillCaretDown
            size={14}
            className={cx("duration-100 text-gray", isOpen && "rotate-180")}
          />
        </div>
      </div>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="bottom-[calc(100%+8px)] left-0 lg:left-1/2 lg:-translate-x-1/2 w-[230px]"
      >
        <div className="max-h-[40vh] md:max-h-[50vh] overflow-y-auto rounded-2xl">
          {subCategoriesOptions.map((subcategory, i) => {
            const isActive = selectedSubCategories.find(
              (e) => e.value === subcategory.value,
            );
            return (
              <div
                onClick={() => handleSelect(subcategory)}
                className={cx(
                  "py-3 px-4 border-b last:border-b-0 border-gray text-gray font-medium cursor-pointer duration-150 text-center",
                  isActive
                    ? "bg-secondary/20 text-secondary"
                    : "hover:bg-gray/30 bg-soft-gray",
                )}
                key={i}
              >
                {subcategory.label}
              </div>
            );
          })}
        </div>
      </Tootlip>
    </div>
  );
};

export default SubCategorySelect;
