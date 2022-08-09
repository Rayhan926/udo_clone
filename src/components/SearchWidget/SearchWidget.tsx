import { cx } from "@config/constants";
import React from "react";
import AddressOrZipCodeInput from "./components/AddressOrZipCodeInput";
import ChildrenDropdown from "./components/ChildrenDropdown/ChildrenDropdown";
import DateSelectDropdown from "./components/DateSelectDropdown";

const SearchWidget = ({ heightSmall }: { heightSmall?: boolean }) => {
  return (
    <section className="relative z-[2]">
      <div className="container px-0 max-w-full md:px-5 xl:max-w-[calc(1235px+40px)]">
        <div
          className={cx(
            "flex flex-col items-center justify-center relative",
            heightSmall ? "h-[270px]" : "h-[500px]",
          )}
        >
          {/* Background Image --Start-- */}
          <div className="absolute top-0 left-0 w-full h-full brightness-90 md:rounded-2xl overflow-hidden">
            <img src="/images/img_184.jpg" alt="img_184" className="w-full" />
          </div>
          {/* Background Image --End-- */}

          <div className="relative z-[2] w-[97%] lg:w-[90%] mx-auto">
            <h1 className="text-[36px] leading-[44px] text-white font-bold text-center">
              Die Freizeitsuchmaschine
            </h1>

            <div
              className={cx(
                "mt-4 grid",
                heightSmall
                  ? "grid-cols-[44%,auto,28%] lg:grid-cols-[50%,auto,30%]"
                  : "grid-cols-[36%,auto,26%,15%] lg:grid-cols-[40%,auto,28%,12%]",
              )}
            >
              <AddressOrZipCodeInput />
              <DateSelectDropdown />
              <ChildrenDropdown />

              {!heightSmall && (
                <div className="pl-[15px] w-full">
                  <button className="h-16 rounded-[10px] bg-primary hover:bg-primary-dark duration-150 font-semibold text-lg px-6 text-white w-full">
                    Finden
                  </button>
                </div>
              )}
            </div>

            {!heightSmall && (
              <h2 className="text-[21px] leading-[30px] text-white font-semibold mt-5 text-center">
                Kein Geld? Egal! Wir zeigen Dir auch unzählige kostenlose
                Aktivitäten.
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
