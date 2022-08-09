import SiteLogo from "@components/SiteLogo/SiteLogo";
import React from "react";
import HeaderSearchBar from "../HeaderSearchBar";

const Header = () => {
  return (
    <header className="hidden md:block">
      <div className="container flex justify-between h-[96px] gap-[100px]">
        {/* Logo --Start-- */}
        <SiteLogo />
        {/* Logo --End-- */}

        <div className="h-full flex items-center grow">
          <HeaderSearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
