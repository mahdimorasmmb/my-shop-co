import { ChevronLeftIcon, ChevronRightIcon ,PlusIcon,MinusIcon,TrashIcon} from "@heroicons/react/outline";
import Image from "next/legacy/image";
import React from "react";
import { useCheckoutStore } from "../store";
// import { urlFor } from "../../../sanity";
import Currency from "react-currency-formatter";
import { imageSrc } from "../helpers/imageSrc";
// import { useDispatch } from "react-redux";
// import { removeFromBasket } from "../../redux/basketSlice";
// import { toast } from "react-toastify";

interface Props {
  items: Product[];
  id: string;
}

export const CheckoutProduct = ({ id, items }: Props) => {
  const removeItems = useCheckoutStore((store) => store.removeItems);

  const removeItemFromBasket = () => {
    removeItems(id);

    // toast.error(`${items[0]?.title} removed from basket`, {
    //   position: "bottom-center",
    // });
  };
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row">
      <div className="relative h-44 w-44">
        {items[0] && (
          <Image
            src={imageSrc(items[0])}
            layout="fill"
            objectFit="contain"
            alt={items[0]?.product_name}
          />
        )}
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4 ">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96 ">{items[0]?.product_name}</h4>
            <p className="flex items-center  font-semibold ">
             <button className="ml-2"> <MinusIcon className="h-4 w-4 text-blue-500" /></button>
              {items.length}
              <button className="mr-2"><PlusIcon className="h-4 w-4 text-blue-500" /></button>
            </p>
          </div>

          {/* <p className=" flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6 " />
          </p> */}
        </div>
        <div className="flex ">
          <h4 className="text-xl ml-8   font-semibold lg:text-2xl">
            <Currency
              quantity={items.reduce((total, item) => total + item.price, 0)}
              currency="irr"
            />
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline "
          >
            <TrashIcon  className="h-5 w-5 text-blue-500  hover:text-blue-700"/>
          </button>
        </div>
      </div>
    </div>
  );
};
