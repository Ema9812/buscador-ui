import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { queryState, resultsState } from "./state/search";

export function useSearchResults() {
  const { query } = useParams();
  const [, setQuery] = useRecoilState(queryState);

  useEffect(() => {
    setQuery(query || "");
  }, [query]);

  return useRecoilValue(resultsState);
}