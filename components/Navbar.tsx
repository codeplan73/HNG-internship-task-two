"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { RiMenu5Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const menuItems = [
  { label: "Home", href: "/" },
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
  const [open, setIsOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <nav className="container relative flex items-center justify-between py-4 md:py-8 shadow drop-shadow">
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
        <RiMenu5Fill
          onClick={() => setIsOpen(!open)}
          className="text-xl md:hidden text-neutral cursor-pointer hover:text-primaryColor"
        />
      </ul>

      {open && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-10 h-screen"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <ul
        className={`container w-8/12 gap-8  py-4 absolute z-20 bg-white h-screen backdrop:bg-slate-400 left-0 top-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <Logo />
        {open &&
          menuItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col py-2 text-slate-700 w-full hover:bg-secondaryColor hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.label}</span>
            </Link>
          ))}

        <Link href="/cart" className="flex" onClick={() => setIsOpen(false)}>
          <RiShoppingCart2Line className="text-xl text-neutral cursor-pointer hover:text-primaryColor" />
          <span className="text-primaryColor bg-white rounded-full text-sm">
            5
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
