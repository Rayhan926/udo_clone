import HiddenBackdrop from "@components/HiddenBackdrop";
import { cx } from "@config/constants";
import { TootlipProps } from "@config/types";
import React from "react";

const Tootlip = ({ onClose, open, className, children }: TootlipProps) => {
  return (
    <>
      <div
        className={cx(
          "absolute bg-white rounded-2xl duration-200 tooltip_shadow",
          className,
          open
            ? "z-[5] opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {children}
      </div>
      <HiddenBackdrop onBackdropClick={onClose} open={open} />
    </>
  );
};

export default Tootlip;
