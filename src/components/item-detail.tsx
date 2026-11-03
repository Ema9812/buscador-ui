import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type ItemDetailProps = {
  id: string;
};

export default function ItemDetail({ id }: ItemDetailProps) {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <p className="item-detail__loading">Cargando...</p>;
  }

  return (
    <div className="item-detail">
      <Carousel showThumbs={false} infiniteLoop>
        {item.images.map((image) => (
          <div key={image}>
            <img src={image} alt={item.title} />
          </div>
        ))}
      </Carousel>
      <h2 className="item-detail__title">{item.title}</h2>
      <p className="item-detail__price">${item.price}</p>
      <p className="item-detail__description">{item.description}</p>
    </div>
  );
}