import SmileIcon from "@components/Icons/SmileIcon";
import MobileBottomSheet from "@components/MobileBottomSheet";
import ChildrenSelect from "@components/SearchWidget/components/ChildrenSelect";
import { cx } from "@config/constants";
import { useOpenChildren, useSelectChildren } from "@state";
import React from "react";

const MobileChildrenSelelct = () => {
  const [selectedChildrenOptions] = useSelectChildren();
  const [open, setOpen] = useOpenChildren();

  const hasSelected = selectedChildrenOptions.length > 0;
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className={cx(
          "flex items-center w-full outline-none bg-[#eaeaea] gap-1 py-2.5 px-3 rounded-[16px]",
          hasSelected ? "" : "justify-center",
        )}
      >
        <SmileIcon />{" "}
        {!hasSelected && <span className="text-lg text-gray">Kinder?</span>}
        {hasSelected && (
          <p className="text-dark font-bold line-clamp-1 text-xl">
            {selectedChildrenOptions.map((e) => e.label).join(", ")}
          </p>
        )}
      </button>

      <MobileBottomSheet open={open} onClose={() => setOpen(false)}>
        <div className="pb-8">
          <ChildrenSelect onSelect={() => setOpen(false)} />
          <div className="px-6 mt-6">
            <button
              type="submit"
              className="w-full outline-none bg-primary hover:bg-primary-dark py-2.5 px-3 rounded-[16px] text-lg text-white font-bold"
            >
              Finden
            </button>
          </div>
        </div>
      </MobileBottomSheet>
    </>
  );
};

export default MobileChildrenSelelct;
