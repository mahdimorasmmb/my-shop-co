import Link from "next/link";
import React from "react";

interface RightNavProps {
  Component: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const RightNav: React.FC<{ list: RightNavProps[] }> = ({ list }) => {
  return (
    <div className="flex items-center justify-center gap-x-4 md:w-1/5">
      {list.map(({ Component, href }) => {
        if (href) {
          return (
            <Link key={href} href={href}>
              {Component}
            </Link>
          );
        }
        return Component;
      })}
    </div>
  );
};

export default RightNav;
