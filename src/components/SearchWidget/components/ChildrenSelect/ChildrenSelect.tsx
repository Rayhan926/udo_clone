import { cx, selectChildrenOptions } from "@config/constants";
import { useSelectChildren } from "@state";
import React from "react";
import { SearchInRadiousOption } from "@config/types";
const ChildrenSelect = ({ onSelect }: { onSelect?: () => void }) => {
  return (
    <div className="p-6">
      <h3 className="text-[22px] leading-[27px] text-dark font-bold">
        Alter des Kindes wählen
      </h3>
      <p className="mt-1 text-lg text-gray">Passendes Freizeitangebot</p>

      <ChildrenOptionsOnly onSelect={onSelect} />
    </div>
  );
};

export default ChildrenSelect;

export const ChildrenOptionsOnly = ({
  onSelect,
  optionClass,
}: {
  optionClass?: string;
  onSelect?: () => void;
}) => {
  const [selected, setSelected] = useSelectChildren();

  const handleSelect = ({ label, value }: SearchInRadiousOption) => {
    setSelected((prev) => {
      if (prev.find((e) => e.value === value)) {
        return prev.filter((each) => each.value !== value);
      }
      return [...prev, { value, label }];
    });
    onSelect && onSelect();
  };

  return (
    <ul className="mt-4 flex gap-y-4 gap-x-2 flex-wrap">
      {selectChildrenOptions.map(({ label, value }, i) => {
        const isActive = selected.find((e) => e.value === value);
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => handleSelect({ label, value })}
              className={cx(
                "outline-none rounded-full py-2.5 font-semibold px-4 duration-150",
                isActive
                  ? "bg-secondary/10 text-secondary"
                  : "text-dark bg-soft-gray hover:bg-gray/30",
                optionClass,
              )}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
