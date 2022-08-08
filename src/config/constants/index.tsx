import { FooterLink, SearchInRadiousOption, SocialLink } from "@config/types";
import classnames from "classnames";

export const cx = classnames;
export const categories = [
  "Outdoor",
  "Kultur",
  "Entertainment",
  "Sport",
  "Feste & Märkte",
  "Abenteuer",
  "Bars & Clubs",
  "Essen & Trinken",
  "Erholung",
  "Sonstiges",
];

export const footerLinks: FooterLink[] = [
  {
    text: "Impressum",
    url: "/impressum",
  },
  {
    text: "Datenschutz",
    url: "/privacy",
  },
  {
    text: "AGB",
    url: "/agb",
  },
  {
    text: "Kontakt",
    url: "/contacts",
  },
];

export const socialLinks: SocialLink[] = [
  {
    iconSrc: "/images/instagram.svg",
    alt: "Instagram",
    url: "https://instagram.com/askudo.de",
  },
  {
    iconSrc: "/images/tiktok.svg",
    alt: "Tiktok",
    url: "https://vm.tiktok.com/ZMeKr8uRW",
  },
  {
    iconSrc: "/images/twitter.png",
    alt: "Twitter",
    url: "https://twitter.com/askudo_de",
  },
];

export const searchInRadiousOptions: SearchInRadiousOption[] = [
  {
    label: "5km",
    value: 5,
  },
  {
    label: "10km",
    value: 10,
  },
  {
    label: "25km",
    value: 25,
  },
  {
    label: "50km",
    value: 50,
  },
  {
    label: "Überall",
    value: "all",
  },
];

export const selectChildrenOptions: SearchInRadiousOption[] = [
  {
    label: "0-5 Jahre",
    value: "0-5",
  },
  {
    label: "6-12 Jahre",
    value: "6-12",
  },
  {
    label: "12-16 Jahre",
    value: "12-16",
  },
];

export const impressumTableOfContents: string[] = [
  "Angaben gemäß § 5 TMG",
  "Kontakt",
  "Angaben zur Berufshaftpflichtversicherung",
  "EU-Streitschlichtung",
  "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
  "Haftung für Inhalte",
  "Haftung für Links",
  "Urheberrecht",
  "Nachweise",
];

export const privacyTableOfContents = [
  "Einleitung und allgemeine Angaben",
  "Verantwortliche Stelle im Sinne des Datenschutzrechts",
  "Begriffsbestimmungen",
  "Datenverarbeitung durch den Besuch unserer Website",
  "Google Analytics",
  "Einsatz von Matomo",
  "Google Maps",
  "Cookies",
  "Marketing/ Werbenetzwerke/ Affiliate- Marketing",
  "Datenweitergabe und Empfänger",
  "Dauer der Speicherung personenbezogener Daten",
  "Ihre Rechte",
  "Widerspruchsrecht",
  "Externe Verlinkungen",
  "Änderungsvorbehalt",
];
export const agbTableOfContents = [
  "Wer sind wir?",
  "Bedingungen",
  "Nutzung",
  "Datenschutz",
  "Beschränkungen und Haftungsausschlüsse",
  "Ihre Haftung uns gegenüber",
  "Beendigung",
  "Sonstiges",
  "Kontakt",
];
