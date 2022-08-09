import { type } from "os";
import { ReactNode } from "react";

export type FooterLink = {
  text: string;
  url: string;
};

export type SocialLink = {
  iconSrc: string;
  url: string;
  alt: string;
};

export type HiddenBackdropProps = {
  open: boolean;
  onBackdropClick: () => void;
};

export type SearchInRadiousOption = {
  label: string;
  value: string | number;
};
export type PriceType = {
  label: string;
  value: string | number;
};

export type SearchInradiusOptionsProps = {
  selected: SearchInRadiousOption;
  onSelect: (option: SearchInRadiousOption) => void;
};

export type TootlipProps = {
  onClose: () => void;
  open: boolean;
  className?: string;
  children: ReactNode;
};

export type MobileBottomSheetProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode | (({ onClose }: { onClose: () => void }) => ReactNode);
  contentWrapperClassname?: string;
};
