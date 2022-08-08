import Tootlip from "@components/Tootlip";
import { useOpenSearchRadius, useSearchRadius } from "@state";
import React, { useState } from "react";
import SearchInradiusOptions from "../SearchInradiusOptions";

const SearchInRadius = () => {
  const [selected, setSelected] = useSearchRadius();
  const [isOpen, setisOpen] = useOpenSearchRadius();

  return (
    <div className="relative pr-6">
      <button
        onClick={() => setisOpen(true)}
        className="rounded-full bg-secondary hover:bg-secondary-dark duration-100 text-white py-1 px-3"
      >
        {selected.label}
      </button>

      <Tootlip
        onClose={() => setisOpen(false)}
        open={isOpen}
        className="top-[calc(100%+15px)] right-0 w-[256px]"
      >
        <h5 className="text-lg text-dark font-bold px-6 py-4">
          Im Radius suchen
        </h5>
        <SearchInradiusOptions
          selected={selected}
          onSelect={(option) => {
            setSelected(option);
            setisOpen(false);
          }}
        />
      </Tootlip>
    </div>
  );
};

export default SearchInRadius;
