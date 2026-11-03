import React from "react";
import { Link } from "react-router-dom";

type SearchResultItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function SearchResultItem({ id, title, price, image }: SearchResultItemProps) {
  return (
    <Link className="result-item" to={`/item/${id}`}>
      <img className="result-item__image" src={image} alt={title} />
      <div className="result-item__info">
        <h3 className="result-item__title">{title}</h3>
        <p className="result-item__price">${price}</p>
      </div>
    </Link>
  );
}