import HiddenBackdrop from "@components/HiddenBackdrop";
import Tootlip from "@components/Tootlip";
import { cx } from "@config/constants";
import { useSearchInput, useOpenSearchSuggestionTooltip } from "@state";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { RiMapPin2Line } from "react-icons/ri";
import SearchInRadius from "../SearchInRadius";
import SearchSuggestionAndUseMyLocation from "../SearchSuggestionAndUseMyLocation";

const AddressOrZipCodeInput = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null!);
  const [isOpen, setIsOpen] = useOpenSearchSuggestionTooltip();
  const [searchValue, setSearchValue] = useSearchInput();

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);

  // useEffect(() => {
  //   if (router.pathname === "/results" && searchValue) {
  //     router.push("/results", {
  //       query: {
  //         city: searchValue,
  //       },
  //     });
  //   }
  // }, [router]);

  return (
    <>
      <div className=" bg-white rounded-l-[10px] relative w-full">
        <div className="h-16 flex items-center">
          <div
            className="flex grow h-full items-center pl-6"
            onClick={() => setIsOpen(true)}
          >
            <RiMapPin2Line className="text-gray" size={25} />
            <input
              ref={inputRef}
              type="text"
              className="w-full h-full outline-none pl-3 font-bold text-dark placeholder:font-normal placeholder:text-dark/70"
              placeholder="Adresse oder PLZ"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <SearchInRadius />
        </div>

        <Tootlip
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="top-[calc(100%+8px)] left-0 w-full"
        >
          <SearchSuggestionAndUseMyLocation />
        </Tootlip>
      </div>
    </>
  );
};

export default AddressOrZipCodeInput;
