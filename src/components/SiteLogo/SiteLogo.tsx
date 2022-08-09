import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <div>
      <Link href="/">
        <a className="relative">
          <img
            src="/images/logoUdo.svg"
            alt="Udo"
            className="max-w-[116px] pt-5"
          />
          <img
            src="/images/logo_addon_500.svg"
            alt="addon"
            className="max-w-[130px] inline-block absolute top-[76px] left-[calc(100%+10px)]"
          />
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;
