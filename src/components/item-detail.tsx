import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./item-detail.module.css";

type Props = {
  id: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export default function ItemDetail({ id }: Props) {
  const [item, setItem] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div className={css.root}>
      <h2 className={css.title}>{item.title}</h2>
      <Carousel showThumbs={false} infiniteLoop>
        {item.images.map((img) => (
          <div key={img}>
            <img src={img} alt={item.title} />
          </div>
        ))}
      </Carousel>
      <p className={css.description}>{item.description}</p>
      <p className={css.price}>${item.price}</p>
    </div>
  );
}