import { atom, selector } from "recoil";

const API_URL = "https://dummyjson.com/products/search?q=";

export type Result = {
  id: string | number;
  title: string;
  price: number;
  thumbnail: string;
};

export const queryState = atom<string>({
  key: "queryState",
  default: "",
});

export const resultsState = selector<Result[]>({
  key: "resultsState",
  get: async ({ get }) => {
    const query = get(queryState);
    console.log("selector corriendo con query:", query);

    if (!query) return [];

    const res = await fetch(API_URL + query);
    const data = await res.json();
    return data.products;
  },
});