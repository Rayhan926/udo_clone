import { footerLinks, socialLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="mt-3 lg:mt-12">
      <div className="container lg:border-t border-soft-gray py-4 pb-5 md:py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-2 items-center text-sm !leading-[17px]">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
            <p className="text-dark font-bold hidden md:block">
              ©2022 YEOGA GmbH
            </p>

            <ul className="flex items-center gap-2">
              {socialLinks.map(({ iconSrc, url, alt }, i) => (
                <li key={i}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image
                      src={iconSrc}
                      width={24}
                      height={24}
                      alt={alt}
                      objectFit="cover"
                      className="rounded overflow-hidden block"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex gap-3 lg:gap-5">
            {footerLinks.map(({ text, url }, i) => (
              <Fragment key={i}>
                <li>
                  <Link href={url}>
                    <a className="text-gray hover:text-dark duration-100">
                      {text}
                    </a>
                  </Link>
                </li>
                {i !== footerLinks.length - 1 && (
                  <span className="inline-block -translate-y-1">.</span>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
