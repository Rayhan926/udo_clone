import { categories, searchInRadiousOptions } from "@config/constants";
import { CategoryType, PriceType, SearchInRadiousOption } from "@config/types";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";

const atomWithLocalStorage = (key: string, initialValue: any) => {
  const getInitialValue = () => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
      return initialValue;
    }
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );
  return derivedAtom;
};

// const searchInputAtom = atom<string>("");
// const searchInputAtom = atomWithLocalStorage("searchInputAtom", "");
const searchInputAtom = atom("");
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

const activeCategoryAtom = atom<CategoryType | null>(categories[0]);
export const useActiveCategory = () => useAtom(activeCategoryAtom);

const priceAtom = atom<PriceType[]>([]);
export const useSelectedPrice = () => useAtom(priceAtom);

const onlineAtom = atom<PriceType[]>([]);
export const useSelectedOnline = () => useAtom(onlineAtom);

const subCategoriesAtom = atom<PriceType[]>([]);
export const useSubCatogories = () => useAtom(subCategoriesAtom);

const openFilterModalAtom = atom(false);
export const useOpenFilterModal = () => useAtom(openFilterModalAtom);

const selectOpenFilter = atom(false);
export const useSelectOpenFilter = () => useAtom(selectOpenFilter);

export const useFormSubmit = () => {
  const router = useRouter();
  const [searchValue] = useSearchInput();
  const [, setOpenSearchSuggetion] = useOpenSearchSuggestionTooltip();

  const formSubmitHandler = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!searchValue) {
      setOpenSearchSuggetion(true);
      return;
    }

    setOpenSearchSuggetion(false);
    router.push(`/results/?city=${searchValue}`);
  };

  return {
    formSubmitHandler,
  };
};
