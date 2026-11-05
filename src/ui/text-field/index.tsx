import React from "react";
import css from "./index.module.css";

type Props = {
  name: string;
  placeholder?: string;
  defaultValue?: string;
};

export function TextField({ name, placeholder, defaultValue }: Props) {
  return (
    <input
      className={css.root}
      type="text"
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}