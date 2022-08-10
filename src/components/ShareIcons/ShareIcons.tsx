import LinkIcon from "@components/Icons/LinkIcon";
import WhatsAppIcon from "@components/Icons/WhatsAppIcon";
import React from "react";

const ShareIcons = () => {
  return (
    <div className="flex gap-2 justify-center rounded-2xl bg-white p-4">
      <div className="__share_icon">
        <img src="/images/telegram.svg" alt="telegram" className="w-8" />
      </div>
      <div className="__share_icon">
        <WhatsAppIcon />
      </div>
      <div className="__share_icon">
        <LinkIcon />
      </div>
    </div>
  );
};

export default ShareIcons;
