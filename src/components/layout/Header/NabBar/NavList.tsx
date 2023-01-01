import Link from "next/link";
import React from "react";

///Type
interface TNavItem {
  text: string;
  href: string;
}

///
const NavItem: React.FC<TNavItem> = ({ text, href }) => {
  return (
    <Link
      className="cursor-pointer font-semibold opacity-60 transition hover:opacity-100"
      href={href}
    >
      {text}
    </Link>
  );
};

/////////////////

const NavList: React.FC<{ list: TNavItem[] }> = ({ list }) => {
  return (
    <nav className="hidden flex-1 items-center justify-center space-x-9 md:flex ">
      {list.map((item) => (
        <NavItem key={item.text} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};

export default NavList;
