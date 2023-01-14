import Image from "next/image";
import Link from "next/link";
import React from "react";

import ShoppingBag from "./NabBar/ShoppingBag";
import Profile from "./NabBar/Profile";
import NavList from "./NabBar/NavList";
import RightNav from "./NabBar/RightNav";
import Basket from "../../../widgets/Basket";
import SearchNav from "../../../widgets/SearchNav";


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
      <Link href="/">
        <p className="text-xl font-extrabold opacity-60 hover:opacity-100">
          فرش پدیده{" "}
        </p>
      </Link>

      {/* <SearchNav /> */}
      <NavList list={navList} />
      <RightNav list={rightList} />
    </header>
  );
};

export default Header;
