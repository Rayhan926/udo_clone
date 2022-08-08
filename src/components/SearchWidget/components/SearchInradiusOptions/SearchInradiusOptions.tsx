import { cx, searchInRadiousOptions } from "@config/constants";
import { SearchInradiusOptionsProps } from "@config/types";
import React from "react";

const SearchInradiusOptions = ({
  onSelect,
  selected,
}: SearchInradiusOptionsProps) => {
  return (
    <div>
      {searchInRadiousOptions.map(({ label, value }, i) => {
        const isActive = selected.value === value;
        return (
          <button
            type="button"
            key={i}
            onClick={() => onSelect({ label, value })}
            className={cx(
              "p-[22px] block w-full text-left duration-100 text-lg md:text-sm font-medium",
              isActive ? "bg-gray/10" : "hover:bg-gray/5",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SearchInradiusOptions;
