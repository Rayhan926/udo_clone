import SiteLogo from "@components/SiteLogo/SiteLogo";
import { categories, cx } from "@config/constants";
import { useWindowWidth } from "@react-hook/window-size";
import { useActiveCategory } from "@state";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ResultsPageMobileHeader from "../ResultsPageMobileHeader";

const ResultPageHeader = () => {
  return (
    <>
      <header className="hidden md:block">
        <div className="container flex justify-between h-[96px] gap-[20px]">
          {/* Logo --Start-- */}
          <SiteLogo />
          {/* Logo --End-- */}

          <div className="h-full flex items-center justify-end grow">
            <HeaderCategories />
          </div>
        </div>
      </header>

      <ResultsPageMobileHeader />
      <div className="h-[105px] md:hidden"></div>
    </>
  );
};

export default ResultPageHeader;

const HeaderCategories = () => {
  const onlyWidth = useWindowWidth();
  const [limit, setLimit] = useState(7);
  const [activeCategory, setActiveCategory] = useActiveCategory();

  useEffect(() => {
    if (onlyWidth > 1280) {
      setLimit(7);
    } else if (onlyWidth > 1000) {
      setLimit(5);
    } else if (onlyWidth > 768) {
      setLimit(3);
    }
  }, [onlyWidth]);

  const __categories = categories.slice(0, limit);
  const __categories_inside_dropdow = categories.slice(
    limit,
    categories.length,
  );

  const isDropdwonActive =
    __categories_inside_dropdow.filter((e) => e === activeCategory).length > 0;

  console.log({ __categories_inside_dropdow, __categories });
  return (
    <>
      <div className="flex gap-2.5">
        <button
          onClick={() => setActiveCategory(null)}
          className={cx("category_style", activeCategory === null && "active")}
        >
          Alle
        </button>
        {__categories.map((category, i) => {
          const isActive = activeCategory === category;
          return (
            <button
              onClick={() => setActiveCategory(category)}
              className={cx("category_style", isActive && "active")}
              key={i}
            >
              {category}
            </button>
          );
        })}

        <div className="relative group z-50">
          <div
            className={cx(
              "flex items-center gap-1 category_style",
              isDropdwonActive && "active",
            )}
          >
            Mehr
            <AiFillCaretDown size={14} />
          </div>
          <div className="absolute top-full right-0 w-[160px] pt-4 hidden group-hover:block">
            <div className="bg-white rounded-xl tooltip_shadow py-3 space-y-1">
              {__categories_inside_dropdow.map((category, i) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(category)}
                    className={cx(
                      "w-full category_style py-2 text-left rounded-none",
                      isActive && "active",
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
