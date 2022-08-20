import SplitIcon from "@components/Icons/SplitIcon";
import Walk from "@components/Icons/Walk";
import ReportModal from "@components/ReportModal";
import { cx } from "@config/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdReport } from "react-icons/md";

const btnFlat =
  "flex items-center gap-2 text-[15px] font-medium leading-[18px] text-gray group-hover:text-dark duration-150 cursor-pointer";

const ResultCard = ({ id, formatted_address }: any) => {
  const router = useRouter();
  const [isOpenReportModal, setIsOpenReportModal] = useState(false);

  //   useEffect(() => {
  //     document.addEventListener("click", (e) =>
  //       console.log(document.activeElement),
  //     );
  //   }, []);

  return (
    <>
      <ReportModal
        open={isOpenReportModal}
        onClose={() => setIsOpenReportModal(false)}
      />
      <div
        className="block cursor-pointer"
        onClick={(e: any) => {
          if (e.target.id === "preventLink") {
            return;
          }
          router.push(`/details/${id + 1}`);
        }}
      >
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{ boxShadow: "0 3px 4px rgba(0,0,0,0.1)" }}
        >
          {/** Floating Price And Report Icon --Start-- */}
          <div className="flex justify-between items-center px-5 absolute top-4 left-0 text-sm z-[0] w-full">
            <div className="px-3 py-1.5 rounded-full bg-soft-gray">
              ab 79,90 €
            </div>

            <div
              className="group"
              id="preventLink"
              onClick={() => setIsOpenReportModal(true)}
            >
              <button className="text-gray/60 group-hover:text-dark duration-150 pointer-events-none">
                <MdReport size={24} />
              </button>
            </div>
          </div>
          {/** Floating Price And Report Icon --End-- */}

          <div className="h-[200px] bg-[#E7E7E7] flex justify-center">
            <img
              src="/images/img_184.jpg"
              alt="img_184.jpg"
              className="h-full"
            />
          </div>
          <div className="p-4 pt-3 bg-[#F5F5F5]">
            <h3 className="text-[20px] leading-[24px] font-bold text-dark mb-3">
              {formatted_address}
            </h3>

            <div className="flex items-center text-sm text-gray gap-2 mb-5">
              <div className="flex items-center gap-1.5">
                <Walk />
                1.6 km
              </div>
              <span className="inline-block -translate-y-1">.</span>
              <span>Ludwigshafen</span>
            </div>

            <div className="flex justify-between gap-1.5 flex-wrap">
              <div>
                <div className="flex gap-5">
                  <div className="group" id="preventLink">
                    <div className={cx(btnFlat, "pointer-events-none")}>
                      <SplitIcon />
                      Teilen
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=49.47741,8.44518"
                    target={"_blank"}
                    rel="noreferrer"
                    className="group"
                    id="preventLink"
                  >
                    <span className={cx(btnFlat, "pointer-events-none")}>
                      <GoLocation size={18} />
                      Karte
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <img
                  src="/images/logo_awin_black.svg"
                  alt="logo_awin_black.svg"
                  className="max-w-[40px]"
                />
              </div>
            </div>

            <div className="flex justify-between gap-1.5 flex-wrap text-[13px] font-medium mt-1">
              <p className="text-secondary">Verfügbarkeit prüfen</p>
              <p className="text-gray">mydays DE / AT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
