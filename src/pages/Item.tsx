import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/item-detail";

export default function ItemPage() {
  const { id } = useParams();

  return <ItemDetail id={id ?? ""} />;
}