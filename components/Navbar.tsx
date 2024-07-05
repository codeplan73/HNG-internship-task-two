"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { RiMenu5Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Designers", href: "/designers" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const iconMenu = [
  {
    icon: (
      <RiMenu5Fill className="text-xl text-neutral cursor-pointer hover:text-primaryColor" />
    ),
    label: "Menu",
  },
  {
    icon: (
      <FiSearch className="text-xl text-neutral cursor-pointer hover:text-primaryColor" />
    ),
    label: "Search",
  },
];

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="container flex items-center justify-between py-4 md:py-8 shadow drop-shadow">
      <Logo />
      <ul className="hidden md:flex items-center justify-start gap-8">
        {menuItems.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classnames({
                "uppercase text-sm hover:text-primaryColor text-primaryColor":
                  link.href === currentPath,
                "text-neutral uppercase  text-sm": link.href !== currentPath,
                "transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex items-center gap-8 text-md">
        {iconMenu.map((item) => (
          <li key={item.label}>{item.icon}</li>
        ))}
        <Link href="/cart" className="flex relative">
          <RiShoppingCart2Line className="text-xl text-neutral cursor-pointer hover:text-primaryColor" />
          <span className="text-primaryColor absolute bg-white rounded-full text-xs -top-2 left-2 px-1">
            5
          </span>
        </Link>
      </ul>

      <ul className="flex items-center gap-4 text-md">
        <Link href="/cart" className="flex relative">
          <RiShoppingCart2Line className="text-xl text-neutral cursor-pointer hover:text-primaryColor" />
          <span className="text-primaryColor absolute bg-white rounded-full text-xs -top-2 left-2 px-1">
            5
          </span>
        </Link>
        <RiMenu5Fill className="text-xl md:hidden text-neutral cursor-pointer hover:text-primaryColor" />
      </ul>
    </nav>
  );
};

export default Navbar;
