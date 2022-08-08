import { searchInRadiousOptions } from "@config/constants";
import { SearchInRadiousOption } from "@config/types";
import { atom, useAtom } from "jotai";

const searchInputAtom = atom<string>("");
export const useSearchInput = () => useAtom(searchInputAtom);

const openSearchSuggestionAtom = atom(false);
export const useOpenSearchSuggestionTooltip = () =>
  useAtom(openSearchSuggestionAtom);

const searchRadiusAtom = atom(searchInRadiousOptions[0]);
export const useSearchRadius = () => useAtom(searchRadiusAtom);

const openSearchRadiusAtom = atom(false);
export const useOpenSearchRadius = () => useAtom(openSearchRadiusAtom);

const selectChildrenAtom = atom<SearchInRadiousOption[]>([]);
export const useSelectChildren = () => useAtom(selectChildrenAtom);

const openChildrenAtom = atom(false);
export const useOpenChildren = () => useAtom(openChildrenAtom);

const selectDateAtom = atom<Date>(new Date());
export const useSelectDate = () => useAtom(selectDateAtom);

const openDateAtom = atom(false);
export const useOpenDate = () => useAtom(openDateAtom);