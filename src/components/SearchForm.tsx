import React from "react";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (form.elements.namedItem("query") as HTMLInputElement).value;
    navigate("/search/" + value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input className="search-form__input" type="text" name="query" />
      <button className="search-form__button">Buscar</button>
    </form>
  );
}