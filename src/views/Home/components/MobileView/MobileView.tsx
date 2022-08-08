import Footer from "@components/Footer";
import MobileBottomSheet from "@components/MobileBottomSheet";
import React, { useState } from "react";
import MobileChildrenSelelct from "./components/MobileChildrenSelelct";
import MobileDateInput from "./components/MobileDateInput";
import MobileHeader from "./components/MobileHeader";
import MobileSearchInput from "./components/MobileSearchInput";

const MobileView = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="grow">
        <MobileHeader />

        {/* Search Form --Start-- */}
        <div className="rounded-t-[16px] overflow-hidden bg-white -mt-4 relative z-[2] pt-6 px-5">
          <h1 className="text-center text-lg text-gray font-medium">
            Die Freizeitsuchmaschine
          </h1>

          <div className="space-y-4 mt-4">
            <MobileSearchInput />
            <MobileDateInput />
            <MobileChildrenSelelct />

            <button
              type="submit"
              className="w-full outline-none bg-primary hover:bg-primary-dark py-2.5 px-3 rounded-[16px] text-lg text-white font-bold !mt-12"
            >
              Finden
            </button>
          </div>
        </div>
        {/* Search Form --End-- */}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default MobileView;
