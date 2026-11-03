import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useSearchResults } from "../hooks/useSearchResults";

function ResultsList() {
  const results = useSearchResults();

  return (
    <div>
      {results.map((r) => (
        <div className="result-item" key={r.id}>
          <img className="result-item__image" src={r.thumbnail} alt={r.title} />
          <div>
            <h3 className="result-item__title">{r.title}</h3>
            <p className="result-item__price">${r.price}</p>
            <Link to={"/item/" + r.id}>Ver más</Link>
          </div>
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