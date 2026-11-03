import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { SearchResult } from "../pages/SearchResult";
import ItemPage from "../pages/Item";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}