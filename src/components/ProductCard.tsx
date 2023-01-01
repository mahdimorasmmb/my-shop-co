import Image from "next/image";
import React from "react";
import { env } from "../env/client.mjs";

interface Props {
  image: {
    id: string;
  };
  title: string;
  body: string;
}

const assetsUrl = env.NEXT_PUBLIC_ASSETS_URL;

const ProductCard = ({ image, title, body }: Props) => {
  return (
    <div className="p-4">
      <Image src={`${assetsUrl}/${image.id}`} alt="image" />
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default ProductCard;
