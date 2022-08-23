import { cx } from "@config/constants";
import { MobileBottomSheetProps } from "@config/types";
import React, { useEffect, useId, useRef } from "react";
// import { v4 as uuidv4 } from "uuid";

const MobileBottomSheet = ({
  onClose,
  open,
  children,
  contentWrapperClassname,
}: MobileBottomSheetProps) => {
  const bottomSheetOverlayRef = useRef<HTMLDivElement>(null!);

  const overlayId = useId();

  useEffect(() => {
    const shouldClose = (e: any) => {
      if (e.target.id === overlayId) {
        onClose();
      }
    };

    bottomSheetOverlayRef.current.addEventListener("click", shouldClose);

    return () => {
      bottomSheetOverlayRef.current?.removeEventListener("click", shouldClose);
    };
  }, [overlayId]);

  return (
    <div
      id={overlayId}
      ref={bottomSheetOverlayRef}
      className={cx(
        "fixed top-0 left-0 w-full h-screen overflow-hidden bg-black/40 z-[99999] flex items-end duration-200",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cx(
          "w-full bg-white duration-200 rounded-t-[16px]",
          open ? "translate-y-0" : "translate-y-5",
          contentWrapperClassname,
        )}
      >
        {typeof children === "function" ? children({ onClose }) : children}
      </div>
    </div>
  );
};

export default MobileBottomSheet;
