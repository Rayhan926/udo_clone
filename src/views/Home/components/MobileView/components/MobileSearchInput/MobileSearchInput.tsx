import MobileBottomSheet from "@components/MobileBottomSheet";
import SearchInradiusOptions from "@components/SearchWidget/components/SearchInradiusOptions";
import SearchSuggestionAndUseMyLocation from "@components/SearchWidget/components/SearchSuggestionAndUseMyLocation";
import {
  useOpenSearchRadius,
  useOpenSearchSuggestionTooltip,
  useSearchInput,
  useSearchRadius,
} from "@state";
import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const MobileSearchInput = () => {
  const [, setOpen] = useOpenSearchSuggestionTooltip();
  const [searchValue] = useSearchInput();
  return (
    <div>
      <label className="__mobile_label">Wo</label>
      <div className="relative">
        <input
          placeholder="Adresse oder PLZ"
          type="text"
          onClick={() => setOpen(true)}
          readOnly
          className="__mobile_input pr-[64px] placeholder:font-normal placeholder:text-lg placeholder:text-gray"
          value={searchValue}
        />

        <MobileSearchRadius />
      </div>
    </div>
  );
};

export default MobileSearchInput;

const MobileSearchRadius = () => {
  const [isOpen, setIsOpen] = useOpenSearchRadius();
  const [selected, setSelected] = useSearchRadius();

  return (
    <>
      <div className="absolute top-0 right-0 flex items-center h-full pr-2.5">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-full bg-secondary hover:bg-secondary-dark duration-100 text-white text-sm py-1.5 px-2.5"
        >
          {selected.label}
        </button>
      </div>

      <MobileBottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
        {({ onClose }) => (
          <div>
            <div className="flex items-center justify-between p-4">
              <h5 className="text-[22px] leading-[25px] text-dark font-bold">
                Im Radius suchen
              </h5>

              <button type="button" onClick={onClose}>
                <IoMdClose size={24} className="text-gray" />
              </button>
            </div>
            <SearchInradiusOptions
              selected={selected}
              onSelect={(option) => {
                setSelected(option);
                onClose();
              }}
            />
          </div>
        )}
      </MobileBottomSheet>
    </>
  );
};

export const MobileSearchhInputBottomSheet = () => {
  const [open, setOpen] = useOpenSearchSuggestionTooltip();

  return (
    <MobileBottomSheet
      open={open}
      onClose={() => setOpen(false)}
      contentWrapperClassname="h-screen !rounded-none"
    >
      <div>
        <div className="flex justify-center text-xl text-dark font-bold p-4 relative">
          Wo
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-4"
            onClick={() => setOpen(false)}
          >
            <IoMdClose size={24} className="text-gray" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-7">
            <MobileSearchInputForm open={open} setOpen={setOpen} />
          </div>
          <SearchSuggestionAndUseMyLocation className="!p-0" />
        </div>
      </div>
    </MobileBottomSheet>
  );
};

export const MobileSearchInputForm = ({
  open,
  setOpen,
  onCrossClick,
}: {
  open?: boolean;
  setOpen?: (e: any) => void;
  onCrossClick?: () => void;
}) => {
  const [searchValue, setSearchValue] = useSearchInput();
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (open) {
      inputRef.current.value = searchValue;
      inputRef.current.focus();
    }
  }, [open]);

  const onSubmitHandler = (e: any) => {
    console.log({ e });
    e.preventDefault();
    const value = inputRef.current.value.trim();

    setSearchValue(value || "");
    setOpen && setOpen(false);
  };
  return (
    <form className="relative" onSubmit={onSubmitHandler}>
      <input
        placeholder="Adresse oder PLZ"
        ref={inputRef}
        type="text"
        className="border border-soft-gray outline-none px-4 focus:border-primary duration-150 rounded-md py-3 w-full"
      />

      <button
        type="button"
        onClick={() => {
          inputRef.current.value = "";
          onCrossClick && onCrossClick();
        }}
        className="absolute top-0 right-0 h-full flex items-center pr-3"
      >
        <IoCloseCircleOutline size={24} className="text-gray" />
      </button>
    </form>
  );
};
