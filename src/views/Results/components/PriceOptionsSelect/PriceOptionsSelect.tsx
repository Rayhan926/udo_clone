import { cx, prices } from "@config/constants";
import { PriceType } from "@config/types";
import { useSelectedPrice } from "@state";
import React from "react";

const PriceOptionsSelect = () => {
  const [selected, setSelected] = useSelectedPrice();
  const handleSelect = ({ label, value }: PriceType) => {
    setSelected((prev) => {
      if (prev.find((e) => e.value === value)) {
        return prev.filter((each) => each.value !== value);
      }
      return [...prev, { value, label }];
    });
  };
  return (
    <div className="flex items-center gap-1.5 flex-wrap mt-3">
      {prices.map((price, i) => {
        const isActive = selected.find((e) => e.value === price.value);
        return (
          <button
            onClick={() => handleSelect(price)}
            key={i}
            className={cx(
              "outline-none border-none duration-150 px-4 py-2 rounded-full bg-soft-gray  flex items-center text-[15px]",
              isActive
                ? "bg-secondary/20 text-secondary"
                : "hover:bg-gray/20 text-dark",
            )}
          >
            {price.label}
          </button>
        );
      })}
    </div>
  );
};

export default PriceOptionsSelect;
