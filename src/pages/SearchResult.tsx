import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useSearchResults } from "../hooks";

function ResultsList() {
  const results = useSearchResults();

  return (
    <div>
      {results.map((r) => (
        <div key={r.id}>
          <img src={r.thumbnail} alt={r.title} />
          <h3>{r.title}</h3>
          <p>${r.price}</p>
          <Link to={"/item/" + r.id}>Ver más</Link>
        </div>
      ))}
    </div>
  );
}

export function SearchResult() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <ResultsList />
    </Suspense>
  );
}