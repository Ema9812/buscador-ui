import React from "react";
import css from "./index.module.css";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

export function MainButton({ children, type = "button" }: Props) {
  return (
    <button type={type} className={css.root}>
      {children}
    </button>
  );
}