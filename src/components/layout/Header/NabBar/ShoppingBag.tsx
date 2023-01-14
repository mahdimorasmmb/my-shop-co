import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useCheckoutStore } from "../../../../store";


const ShoppingBag = () => {
  const items = useCheckoutStore((state)=>state.items)
  return (
    <div className=" relative cursor-pointer">
      <span className=" absolute -right-1 -top-1 z-30 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-t from-pink-500 to-violet-500 text-[10px] text-white">
        {items ? items.length : 0}
      </span>
      <ShoppingBagIcon className="h-6 w-6  opacity-75 transition hover:opacity-100" />
    </div>
  );
};

export default ShoppingBag;
