import Link from "next/link";
import React from "react";
import HeaderSearchBar from "../HeaderSearchBar";

const Header = () => {
  return (
    <header className="hidden md:block">
      <div className="container flex justify-between h-[96px] gap-[100px]">
        {/* Logo --Start-- */}
        <div>
          <Link href="/">
            <a className="flex pt-5 gap-4">
              <img
                src="/images/logoUdo.svg"
                alt="Udo"
                className="max-w-[116px]"
              />
              <img
                src="/images/logo_addon_500.svg"
                alt="addon"
                className="max-w-[130px] inline-block -mt-8"
              />
            </a>
          </Link>
        </div>
        {/* Logo --End-- */}

        <div className="h-full flex items-center grow">
          <HeaderSearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
