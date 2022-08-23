import Footer from "@components/Footer";
import FilterIcon from "@components/Icons/FilterIcon";
import ResultCard from "@components/ResultCard";
import SearchWidget from "@components/SearchWidget";
import {
  useOpenDate,
  useOpenFilterModal,
  useSelectDate,
  useSelectOpenFilter,
} from "@state";
import HeaderSearchBar from "@views/Home/components/HeaderSearchBar";
import React from "react";
import OnlineSelectDropdown from "./components/OnlineSelectDropdown";
import PriceSelectDropdown from "./components/PriceSelectDropdown";
import ResultPageHeader from "./components/ResultPageHeader";
import SubCategorySelect from "./components/SubCategorySelect";
import WeatherComponent from "./components/WeatherComponent";
import { format } from "date-fns";
import { cx } from "@config/constants";
import ResultsPageShare from "./components/ResultsPageShare";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import client from "../../client";
import NoResultFound from "@components/NoResultFound";

const Results = ({ data }: any) => {
  const router = useRouter();
  const [, setIsOpen] = useOpenFilterModal();
  const [selectedDate] = useSelectDate();
  const [, setOpenDateSelect] = useOpenDate();
  const [isOpenSelected, setIsOpenSelected] = useSelectOpenFilter();

  // const { data: clientData } = useQuery(
  //   "get-results",
  //   () => client.get(`/frontend/city/?city=${router.query?.city}`),
  //   {
  //     enabled: !!router.query?.city,
  //     retry: false,
  //   },
  // );

  // console.log({ clientData });
  return (
    <>
      <ResultPageHeader />
      <div className="hidden md:block">
        <SearchWidget heightSmall />
      </div>

      {/** Only visible on Desktop --Start-- */}
      <div className="hidden md:flex justify-between items-center container mt-12 gap-[200px]">
        <h1 className="text-[36px] leading-[44px] text-dark font-bold">
          Freizeitangebote in {router.query?.city}
        </h1>

        <HeaderSearchBar />
      </div>

      <section className="hidden md:block mt-8">
        <div className="container flex justify-between">
          <div className="flex gap-2 w-full">
            <WeatherComponent />
            <SubCategorySelect />
            <PriceSelectDropdown />
            <OnlineSelectDropdown />

            <div className="ml-auto">
              <ResultsPageShare />
            </div>
          </div>
        </div>
      </section>
      {/** Only visible on Desktop --End-- */}

      {/** Only visible on mobile --Start-- */}
      <div className="md:hidden container mt-6">
        <div className="flex items-center gap-0">
          <h3 className="text-lg text-dark font-bold">
            Vorschläge in {router.query?.city}
          </h3>
          <ResultsPageShare />
        </div>

        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setIsOpen(true)}
            className="h-10 aspect-square bg-soft-gray rounded-full flex justify-center items-center"
          >
            <FilterIcon />
          </button>
          <WeatherComponent />
          <div
            onClick={() => setOpenDateSelect(true)}
            className="h-10 rounded-full bg-soft-gray px-4 text-sm flex items-center"
          >
            {format(selectedDate, "dd MMM")}
          </div>
          <div
            onClick={() => setIsOpenSelected((prev) => !prev)}
            className={cx(
              "h-10 rounded-full px-4 text-sm flex items-center duration-150",
              isOpenSelected
                ? "bg-secondary/20 text-secondary"
                : "bg-soft-gray",
            )}
          >
            Geöffnet
          </div>
        </div>
      </div>
      {/** Only visible on mobile --End-- */}

      <section className="mt-6">
        {data?.length > 0 ? (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((e: any, i: number) => (
              <ResultCard {...e} key={i} id={i} />
            ))}
          </div>
        ) : (
          <NoResultFound />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Results;
