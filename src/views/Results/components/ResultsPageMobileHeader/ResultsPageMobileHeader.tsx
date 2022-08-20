import { categories, cx } from "@config/constants";
import { useActiveCategory, useOpenSearchSuggestionTooltip } from "@state";
import { MobileSearchInputForm } from "@views/Home/components/MobileView/components/MobileSearchInput";
import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const ResultsPageMobileHeader = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [activeCategory, setActiveCategory] = useActiveCategory();
  const [, setOpen] = useOpenSearchSuggestionTooltip();
  return (
    <header
      className="fixed top-0 left-0 w-full bg-white z-[9999] md:hidden"
      style={{ boxShadow: "0 3px 6px rgb(0 0 0 / 10%)" }}
    >
      <div>
        <div className="flex justify-between items-center py-5 container">
          <button className="text-gray" onClick={() => setOpen(true)}>
            <GoLocation size={22} />
          </button>
          <Link href={"/"}>
            <a>
              <img
                src="/images/compact_logo.svg"
                alt="Udo"
                className="max-w-[56px]"
              />
            </a>
          </Link>
          <button
            className="text-gray"
            onClick={() => setIsOpenSearch((prev) => !prev)}
          >
            <BsSearch size={21} />
          </button>
        </div>
        <div
          className={cx(
            "container overflow-hidden duration-200",
            isOpenSearch ? "h-[50px] mb-5" : "h-0",
          )}
        >
          <MobileSearchInputForm
            open={isOpenSearch}
            onCrossClick={() => setIsOpenSearch(false)}
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((category, i) => {
            const isActive = activeCategory?.value === category.value;
            return (
              <button
                onClick={() => setActiveCategory(category)}
                className={cx(
                  "text-[13px] leading-[16px] text-gray font-semibold whitespace-nowrap rounded-full py-1 px-2.5 first:ml-5 last:mr-5",
                  isActive && "bg-secondary text-white",
                )}
                key={i}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default ResultsPageMobileHeader;
