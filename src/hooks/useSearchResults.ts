import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryState, resultsState } from "../state/search";

export function useSearchResults() {
  const { query } = useParams();
  const setQuery = useSetRecoilState(queryState);

  useEffect(() => {
    console.log("cambió la URL, query:", query);
    setQuery(query ?? "");
  }, [query]);

  return useRecoilValue(resultsState);
}