import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../ui/text-field";
import { MainButton } from "../ui/buttons";
import css from "./search-form.module.css";

export function SearchForm() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    navigate("/search/" + target.query.value);
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField name="query" placeholder="Buscá algo..." />
      <MainButton type="submit">Buscar</MainButton>
    </form>
  );
}