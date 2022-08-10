import LocaltionIcon from "@components/Icons/LocaltionIcon";
import SplitIcon from "@components/Icons/SplitIcon";
import ShareIcons from "@components/ShareIcons/ShareIcons";
import Tootlip from "@components/Tootlip";
import { cx } from "@config/constants";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";

const btnStyle =
  "rounded-full px-4 py-2 font-semibold flex items-center gap-2 details_pae_btn_shadow duration-150";
const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative z-[2]">
      <div className="md:container-lg">
        <div className="h-[250px] md:h-[302px] relative">
          <div className="h-full overflow-hidden md:rounded-2xl md:shadow-md flex justify-center items-center md:bg-soft-gray">
            <img
              src="/images/img_184.jpg"
              alt="img_184.jpg"
              className="h-full"
            />
          </div>
          <div className="h-full absolute top-0 left-0 w-full hidden md:block">
            <div className="container flex flex-col justify-center h-full">
              <h6 className="text_shadow text-white text-[16px] leading-[24px] font-medium">
                Sonstiges
              </h6>
              <h1 className="text_shadow text-white text-[36px] leading-[44px] font-bold">
                Stretchlimousine mieten Ludwigshafen
              </h1>
              <p className="text_shadow text-white text-[18px] leading-[27px] font-medium">
                Ludwigshafen
              </p>

              <div className="flex gap-3 mt-9">
                <ShareBtn />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=49.47741,8.44518"
                  target={"_blank"}
                  rel="noreferrer"
                  className={cx(
                    btnStyle,
                    "bg-white/80 hover:bg-soft-gray text-dark",
                  )}
                >
                  <LocaltionIcon size={20} />
                  Karte
                </a>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 p-3 flex justify-between md:hidden">
            <div
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-white flex itece text-gray justify-center items-center"
            >
              <HiOutlineChevronLeft size={25} />
            </div>

            <ShareBtnMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const ShareBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className={cx(btnStyle, "bg-primary hover:bg-primary-dark text-white")}
      >
        <SplitIcon />
        Teilen
      </button>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[225px]"
      >
        <ShareIcons />
      </Tootlip>
    </div>
  );
};
const ShareBtnMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 rounded-full bg-white flex itece text-gray justify-center items-center"
      >
        <div className="scale-110">
          <SplitIcon />
        </div>
      </div>

      <Tootlip
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="top-12 right-0 w-[225px]"
      >
        <ShareIcons />
      </Tootlip>
    </div>
  );
};
