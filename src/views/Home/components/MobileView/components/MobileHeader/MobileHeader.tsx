import React from "react";

const MobileHeader = () => {
  return (
    <div className="h-[35vh] bg-slate-200 relative">
      <img
        src="/images/img_184.jpg"
        alt="img_184"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#1D1D1D]/40">
        <img src="/images/logoUdoMobile.svg" alt="logoUdoMobile" />
      </div>
    </div>
  );
};

export default MobileHeader;
