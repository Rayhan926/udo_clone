import { cx } from "@config/constants";
import { useOpenSearchSuggestionTooltip, useSearchInput } from "@state";
import { useAtom } from "jotai";
import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const SearchSuggestionAndUseMyLocation = ({
  className,
}: {
  className?: string;
}) => {
  const [, setIsOpen] = useOpenSearchSuggestionTooltip();
  const [, setSearchValue] = useSearchInput();
  return (
    <div className={cx("p-6 px-8 pb-20", className)}>
      <button type="button" className="flex items-center gap-3 w-full">
        <IoPaperPlaneOutline size={20} className="text-gray" />
        <h5 className="text-lg text-dark font-bold">Mein Standort verwenden</h5>
      </button>

      <div className="w-full pl-8 mt-8">
        <button
          type="button"
          onClick={() => {
            setSearchValue("Mannheim");
            setIsOpen(false);
          }}
          className="border-y py-5 border-soft-gray outline-none text-dark block w-full text-left"
        >
          Mannheim
        </button>
      </div>
    </div>
  );
};

export default SearchSuggestionAndUseMyLocation;
