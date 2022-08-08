import { HiddenBackdropProps } from "@config/types";
import React, { useEffect, useRef } from "react";

const HiddenBackdrop = ({ open, onBackdropClick }: HiddenBackdropProps) => {
  const backdropRef = useRef<HTMLDivElement>(null!);

  const trackClick = (e: any) => {
    if (e.target.id === "__backdrop") {
      onBackdropClick();
    }
  };

  useEffect(() => {
    if (!open) return;
    const backdrop = backdropRef.current;

    backdrop.addEventListener("click", trackClick);

    return () => {
      backdrop.removeEventListener("click", trackClick);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      id="__backdrop"
      className="fixed top-0 left-0 w-full h-screen z-[3]"
    ></div>
  );
};

export default HiddenBackdrop;
