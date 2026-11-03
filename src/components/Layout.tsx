import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          Buscador
        </Link>
        <SearchForm />
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  );
}