import React from "react";
import { BiCaretRight } from "react-icons/bi";

const TableOfContents = ({ sections }: { sections: string[] }) => {
  return (
    <div
      style={{ boxShadow: "0 1px 8px rgb(0 0 0 / 10%)" }}
      className="px-6 py-2 rounded-[16px] bg-white mt-10"
    >
      {sections.map((section, i) => (
        <a
          href={`#info-block-${i + 1}`}
          className="flex items-center gap-3 border-b border-soft-gray last:border-b-0"
          key={i}
        >
          <div className="shrink-0 text-secondary">
            <BiCaretRight />
          </div>
          <p className="text-[14px] leading-[42px] text-dark font-semibold line-clamp-1">
            {section}
          </p>
        </a>
      ))}
    </div>
  );
};

export default TableOfContents;
