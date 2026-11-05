import { atom, selector } from "recoil";

export const queryState = atom({
  key: "query",
  default: "",
});

export const resultsState = selector({
  key: "results",
  get: async ({ get }): Promise<any[]> => {
    const query = get(queryState);
    if (!query) return [];
    const res = await fetch("https://dummyjson.com/products/search?q=" + query);
    const data = await res.json();
    return data.products;
  },
});