import {
  FooterLink,
  PriceType,
  SearchInRadiousOption,
  SocialLink,
} from "@config/types";
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

export const prices: PriceType[] = [
  {
    label: "Free",
    value: "",
  },
  {
    label: "€",
    value: "€",
  },
  {
    label: "€€",
    value: "€€",
  },
  {
    label: "€€€",
    value: "€€€",
  },
];

export const onlineOptions: PriceType[] = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Offline",
    value: "offline",
  },
];

export const subCategoriesOptions: PriceType[] = [
  {
    label: "Aussichtsplattformen",
    value: "Aussichtsplattformen",
  },
  {
    label: "Autokino",
    value: "Autokino",
  },
  {
    label: "Beachvolleyball",
    value: "Beachvolleyball",
  },
  {
    label: "Bikepark",
    value: "Bikepark",
  },
  {
    label: "Extremsport",
    value: "Extremsport",
  },
  {
    label: "Freibäder / Seen",
    value: "Freibäder / Seen",
  },
  {
    label: "Freizeitparks",
    value: "Freizeitparks",
  },
  {
    label: "Garten",
    value: "Garten",
  },
  {
    label: "Grillplatz",
    value: "Grillplatz",
  },
  {
    label: "Klettersport",
    value: "Klettersport",
  },
  {
    label: "Motorsport",
    value: "Motorsport",
  },
  {
    label: "Parks",
    value: "Parks",
  },
  {
    label: "Rodelbahn",
    value: "Rodelbahn",
  },
  {
    label: "Schlößer / Burgen",
    value: "Schlößer / Burgen",
  },
  {
    label: "Sehenswürdigkeiten",
    value: "Sehenswürdigkeiten",
  },
  {
    label: "Skatepark",
    value: "Skatepark",
  },
  {
    label: "Spielplätze",
    value: "Spielplätze",
  },
  {
    label: "Stadtführungen",
    value: "Stadtführungen",
  },
];
