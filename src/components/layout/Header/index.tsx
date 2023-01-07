import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SearchIcon } from "@heroicons/react/outline";
import ShoppingBag from "./NabBar/ShoppingBag";
import Profile from "./NabBar/Profile";
import NavList from "./NabBar/NavList";
import RightNav from "./NabBar/RightNav";
import Basket from "../../../widgets/Basket";

const navList = [
  { text: "ارتباظ با ما ", href: "" },
  { text: "بلاگ", href: "" },
  { text: "محصولات", href: "" },
];

const rightList = [
  {
    Component: <Basket />,
    href: "/checkout",
  },
  {
    Component: <Profile />,
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full flex-row-reverse  items-center justify-between bg-[#E7EcEE] p-4 ">
      <div className="flex  items-center justify-center md:w-1/5">
        <Link href="/">
          <Image
            width={70}
            height={70}
            src="/logo.svg"
            alt="header image"
            className=" relative  cursor-pointer opacity-75 transition hover:opacity-100"
          />
        </Link>
      </div>

      <SearchIcon className="h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100 " />
      <input />

      <NavList list={navList} />
      <RightNav list={rightList} />
    </header>
  );
};

export default Header;
