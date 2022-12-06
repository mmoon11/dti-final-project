import React from "react";
import Link from "next/link";

type NavLink = {
  name: string;
  path: string;
};

const navData: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New Transaction",
    path: "/newTransaction",
  },
  {
    name: "Transactions",
    path: "/transactions",
  },
];

const Navbar = () => (
  <header>
    <nav>
      {navData
        .map(({ name, path }) => (
          <Link key={path} href={path}>
            {name}
          </Link>
        ))
        // @ts-ignore
        .reduce((left, right) => [left, " | ", right])}
    </nav>
  </header>
);

export default Navbar;
