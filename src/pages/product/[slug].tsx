import { useQuery } from "@tanstack/react-query";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { imageSrc } from "../../helpers/imageSrc";
import { getProductPage } from "../../queries/queries";
import ColorRadioButton from "../../widgets/ColorRadioButton";
import SizeRadioButton from "../../widgets/SizeRadioButton";




const Product = () => {
  const router = useRouter()
  const { data: product, isSuccess: isSuccessProduct } = useQuery<Product[]>({
    queryKey: ["product",router.query.slug],
    queryFn: async() => getProductPage({product_slug:router.query.slug}) 
  });

  console.log(product);
  
  if(isSuccessProduct && product[0]) return  (
    <div dir="rtl" className="flex  ">
      <div className="w-1/2 p-10">
      <img  className=" h-[525px] w-full object-cover" src={imageSrc(product[0])} alt={product[0]?.product_name}/>
      </div>
      <div className="w-1/2 p-10">
        <h1 className="mt-10 mb-10  text-4xl font-bold">{product[0]?.product_name}</h1>
        <ColorRadioButton  listItems={product[0].product_color}/>
        <SizeRadioButton  listItems={product[0].product_size}/>
        <p className="mt-10 text-lg"  dangerouslySetInnerHTML={{__html:product[0].product_description}}/>
        <div className="inline-flex rounded mt-5 py-2 px-4 bg-gray-200">
        <p className="text-xl font-semibold">قیمت:</p>
        <p className="text-2xl font-bold mr-10 ">{product[0].price}</p>
        </div>
      </div>
     
    </div>
  );
  return null
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query);


  return {
    props: {},
  };
};
