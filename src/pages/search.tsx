import React from "react";
import { useParams } from "react-router-dom";
import SearchResults from "../components/search-results";

export default function SearchPage() {
  const { query } = useParams();

  return <SearchResults query={query ?? ""} />;
}