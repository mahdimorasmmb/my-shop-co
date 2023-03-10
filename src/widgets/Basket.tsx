import Link from "next/link";
import React from "react";
// import { selectBasketItems } from "../../redux/basketSlice";
// import { useSelector } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import  {useCheckoutStore, useHydratedCheckoutStore}  from "../store/index";




interface Props {
  type?: "default" | "bottomPage";
}

const Basket: React.FC<Props> = ({ type }) => {
  const quantityItems = useHydratedCheckoutStore((state)=>state.quantityItems)

  const ContentComponent = () => {
    return (
      <div
        className={`${
          type === "default"
            ? "relative cursor-pointer"
            : "fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300"
        }`}
      >
        {quantityItems > 0 && (
          <span
            className={` absolute z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white ${
              type === "default"
                ? "-right-1 -top-1 h-4 w-4"
                : " -right-2 -top-2   h-7 w-7  "
            }`}
          >
            {quantityItems}
          </span>
        )}
        <ShoppingBagIcon className="h-6 w-6  opacity-75 transition hover:opacity-100" />
      </div>
    );
  };

  if (quantityItems === 0 && type === "bottomPage") {
    return null;
  }

  if (type === "bottomPage") {
    return (
      <Link href="/checkout">
        <ContentComponent />
      </Link>
    );
  }
  return <ContentComponent />;
};

Basket.defaultProps = {
  type: "default",
};

export default Basket;
