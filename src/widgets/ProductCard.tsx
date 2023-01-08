import Image from "next/legacy/image";
import React from "react";
import { env } from "../env/client.mjs";
import Button from "./Button";

interface Props {
  product: Product;
}

const assetsUrl = env.NEXT_PUBLIC_ASSETS_URL;

const ProductCard = ({ product }: Props) => {
  return (
    <div
      dir="rtl"
      className="   min-h-[10rem] w-96  overflow-hidden rounded-md bg-white text-gray-700 shadow-lg"
    >
      <img
        className=" h-[525px] w-full object-cover"
        src={`${assetsUrl}/${product.product_image[0].directus_files_id.id}`}
        alt="image"
      />

      <div className=" flex flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            در انبار موجود است {" "}
          </span>
          {/* <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            official store
          </span> */}
        </div>
        <h2 title={product.product_name} className=" overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-semibold">
        {product.product_name}
        </h2>
        <div>
          <span className="text-xl font-bold">40000000</span>
          <div className="mt-1 flex items-center gap-2">
            <span> 500000</span>
            <span className="rounded-md bg-green-400 px-1.5 py-0.5 text-xs text-white">
              save 20%
            </span>
          </div>
        </div>
        <div className="mt-2">
          <Button title="افزودن به سبد خرید" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
