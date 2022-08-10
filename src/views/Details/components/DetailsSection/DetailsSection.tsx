import GloveIcon from "@components/Icons/GloveIcon";
import LocaltionIcon from "@components/Icons/LocaltionIcon";
import ReportModal from "@components/ReportModal";
import React, { useState } from "react";
import { MdReport } from "react-icons/md";

const DetailsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ReportModal open={isOpen} onClose={() => setIsOpen(false)} />
      <section className="-mt-5 bg-white relative z-[2] md:mt-[55px] rounded-t-2xl md:rounded-t-none pt-6 md:pt-0">
        <div className="container">
          <div className="md:hidden mb-10">
            <h1 className="text-[22px] leading-[27px] font-bold text-dark">
              Rent a stretch limousine in Ludwigshafen
            </h1>
            <p className="text-lg text-gray font-medium mt-6">Ludwigshafen</p>
            <p className="text-base text-gray mt-1 flex gap-2">
              Ludwigshafen
              <span className="-translate-y-0.5 font-bold text-dark">.</span>
              <span className="text-dark font-semibold">1.9km</span>
            </p>
            <a href="" className="flex items-center gap-3 text-gray mt-2">
              <LocaltionIcon />
              <span className="text-secondary font-medium">Karte</span>
            </a>
          </div>
          <div className="flex-col-reverse md:flex-row flex gap-10">
            <div className="grow">
              <h3 className="text-2xl font-bold text-dark">Beschreibung</h3>
              <p className="mt-5 text-base text-dark">
                Du hast im Fernsehen schon so oft Leute in Stretchlimousinen
                gesehen und Dich immer gefragt, wie sich dieser Luxus wohl
                anfühlt? Diese Erfahrung kannst Du beim Fahren einer
                Stretchlimousine nun machen. Du wirst allein oder mit Freunden
                durch Deine Heimatr
              </p>

              <div className="mt-10 md:mt-16">
                <h3 className="text-2xl font-bold text-dark">
                  Preis: ab 149,90 €
                </h3>

                <a
                  href="https://www.awin1.com/pclick.php?p=24654074139&a=738621&m=14087"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ boxShadow: "0 1px 6px rgb(0 0 0 / 20%)" }}
                  className="rounded-2xl inline-block text-gray hover:text-dark text-lg mt-4 px-5 py-3 text-center"
                >
                  mehr Informationen
                  <p>hier</p>
                </a>

                <div className="max-w-[320px] mt-12 md:mt-20">
                  <img
                    src="/images/img_184.jpg"
                    alt="img_184.jpg"
                    className="h-full"
                  />
                </div>
                <p className="text-gray text-sm mt-6">
                  | Bereitgestellt von AWIN | mydays DE / AT |
                </p>

                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-2 mt-3 text-gray/70 hover:text-gray font-semibold"
                >
                  <MdReport size={22} />
                  Anzeige melden
                </button>
              </div>
            </div>
            <div className="w-[380px] shrink-0">
              <a
                href="https://www.awin1.com/pclick.php?p=24654074139&a=738621&m=14087"
                target={"_blank"}
                rel="noreferrer"
                className="flex text-lg font-medium text-gray gap-2"
              >
                <GloveIcon />
                Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;
