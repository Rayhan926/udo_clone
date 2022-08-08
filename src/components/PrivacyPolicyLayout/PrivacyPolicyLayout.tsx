import TableOfContents from "@components/TableOfContents";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { BiChevronLeft } from "react-icons/bi";

const PrivacyPolicyLayout = ({
  children,
  title,
  subtitle,
  tableOfContents,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  tableOfContents?: string[];
}) => {
  const router = useRouter();
  return (
    <section className="mt-5 md:mt-10">
      <div className="container">
        <div className="fixed top-10 hidden md:block">
          <Link href="/">
            <a>
              <img src="/images/logoUdo.svg" alt="logoUdo" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[116px,800px] md:gap-16">
          <div></div>
          <div>
            <button className="mb-5 md:hidden" onClick={() => router.back()}>
              <BiChevronLeft size={35} className="text-gray" />
            </button>
            <h1 className="text-[22px] leading-[27px] md:text-[34px] md:leading-[44px] text-dark font-bold">
              {title}
            </h1>
            {subtitle && <p className="text-gray text-[15px]">{subtitle}</p>}

            {/* Table of Contents --Start-- */}
            {tableOfContents && <TableOfContents sections={tableOfContents} />}
            {/* Table of Contents --End-- */}

            <div className="info_contents_wrapper mt-12 pb-[100px] md:pb-[280px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyLayout;
