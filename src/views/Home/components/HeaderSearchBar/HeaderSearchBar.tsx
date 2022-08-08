import React from "react";
import { FiSearch } from "react-icons/fi";
const HeaderSearchBar = () => {
  return (
    <div className="grow">
      <form className="relative">
        <input
          type="text"
          className="border border-soft-gray focus:border-[#dddddd] py-3 outline-none pl-[58px] pr-6 w-full"
          placeholder="Stichwortsuche"
        />
        <span className="absolute top-0 left-0 h-full pl-5 text-gray pr-3 flex justify-center items-center">
          <FiSearch size={22} />
        </span>
      </form>
    </div>
  );
};

export default HeaderSearchBar;
