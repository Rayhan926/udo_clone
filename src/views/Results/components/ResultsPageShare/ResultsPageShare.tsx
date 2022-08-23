import SplitIcon from "@components/Icons/SplitIcon";
import ShareIcons from "@components/ShareIcons/ShareIcons";
import Tootlip from "@components/Tootlip";
import React, { useState } from "react";

const ResultsPageShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2.5 px-2 md:px-4 py-1.5 rounded-full cursor-pointer md:border md:border-gray/10 md:hover:bg-gray/10 duration-150"
      >
        <SplitIcon />
        <span className="hidden md:inline">Ergebnisse teilen</span>
      </div>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-[calc(100%+14px)] right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 w-[225px]"
      >
        <ShareIcons />
      </Tootlip>
    </div>
  );
};

export default ResultsPageShare;
