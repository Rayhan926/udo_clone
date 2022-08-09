import Footer from "@components/Footer";
import ResultCard from "@components/ResultCard";
import SearchWidget from "@components/SearchWidget";
import HeaderSearchBar from "@views/Home/components/HeaderSearchBar";
import React from "react";
import OnlineSelectDropdown from "./components/OnlineSelectDropdown";
import PriceSelectDropdown from "./components/PriceSelectDropdown";
import ResultPageHeader from "./components/ResultPageHeader";
import SubCategorySelect from "./components/SubCategorySelect";
import WeatherComponent from "./components/WeatherComponent";

const Results = () => {
  return (
    <>
      <ResultPageHeader />
      <div className="hidden md:block">
        <SearchWidget heightSmall />
      </div>
      <div className="h-[105px] md:hidden"></div>
      {/* <div className="flex justify-between items-center container mt-12 gap-[200px]">
        <h1 className="text-[36px] leading-[44px] text-dark font-bold">
          Freizeitangebote in Mannheim
        </h1>
        <HeaderSearchBar />
      </div>

      <section className="mt-8">
        <div className="container flex justify-between">
          <div className="flex gap-2">
            <WeatherComponent />
            <SubCategorySelect />
            <PriceSelectDropdown />
            <OnlineSelectDropdown />
          </div>
        </div>
      </section> */}

      <section className="mt-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...new Array(12).keys()].map((e) => (
            <ResultCard key={e} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Results;
