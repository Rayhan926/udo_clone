import MobileBottomSheet from "@components/MobileBottomSheet";
import ChildrenSelect, {
  ChildrenOptionsOnly,
} from "@components/SearchWidget/components/ChildrenSelect";
import { cx } from "@config/constants";
import { useOpenFilterModal } from "@state";
import MobileDateInput from "@views/Home/components/MobileView/components/MobileDateInput";
import MobileSearchInput from "@views/Home/components/MobileView/components/MobileSearchInput";
import OnlineOptionsSelect from "@views/Results/components/OnlineOptionsSelect";
import PriceOptionsSelect from "@views/Results/components/PriceOptionsSelect";
import SubCategorySelect from "@views/Results/components/SubCategorySelect";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const sectionStyle = "p-4 py-5 pb-6 space-y-5 border-b border-soft-gray";
const labelStyle = "text-[18px] leading-[22px] font-bold text-dark";
const MobileFilter = () => {
  const [isOpen, setIsOpen] = useOpenFilterModal();
  return (
    <MobileBottomSheet
      open={isOpen}
      onClose={() => setIsOpen(false)}
      contentWrapperClassname="h-full !rounded-none"
    >
      <div className="h-full flex flex-col">
        <div className="flex p-4 justify-between items-center">
          <p className="text-base font-medium text-secondary">Löschen</p>
          <h6 className="text-[22px] leading-[27px] font-bold text-dark">
            Filter
          </h6>
          <button className="text-gray ml-9" onClick={() => setIsOpen(false)}>
            <IoCloseSharp size={25} />
          </button>
        </div>

        <div className={sectionStyle}>
          <MobileSearchInput inputClass="font-normal text-base placeholder:text-base" />
          <MobileDateInput inputClass="font-normal text-base" />
        </div>

        <div className={sectionStyle}>
          <h6 className={labelStyle}>Kinder</h6>
          <ChildrenOptionsOnly optionClass="!text-sm !font-medium" />
        </div>
        <div className={cx(sectionStyle, "!pb-4")}>
          <SubCategorySelect />
        </div>
        <div className={sectionStyle}>
          <h6 className={labelStyle}>Preis</h6>
          <PriceOptionsSelect />
        </div>
        <div className={cx(sectionStyle, "!border-b-0")}>
          <h6 className={labelStyle}>Online</h6>
          <OnlineOptionsSelect />
        </div>

        <div className="mt-auto p-4">
          <button className="text-[18px] leading-[27px] w-full font-semibold px-5 py-2.5 outline-none rounded-2xl bg-primary text-white border border-primary hover:bg-primary-dark duration-150">
            Vorschlag anzeigen
          </button>
        </div>
      </div>
    </MobileBottomSheet>
  );
};

export default MobileFilter;
