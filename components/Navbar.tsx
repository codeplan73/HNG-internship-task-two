import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { RiMenu5Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Designers", path: "/designers" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-8">
      <Logo />
      <ul className="flex items-center justify-start gap-8">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path}>
              <Link href={item.path}>{item.label}</Link>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4">
        <li>
          <RiMenu5Fill className="text-xl text-neutral cursor-pointer" />
        </li>
        <li>
          <FiSearch className="text-neutral cursor-pointer" />
        </li>
        <li>
          <Link href="/cart">
            <RiShoppingCart2Line className="text-xl text-neutral cursor-pointer" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
