import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarked,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { shoppingMenuItems, moreLinks } from "@/data/link";

const Footer = () => {
  return (
    <footer className="flex flex-col z-0 w-full">
      <div className="bg-gray flex flex-col px-8 md:px-16 py-6 md:py-8 md:flex-row md:items-start md:justify-evenly gap-12">
        <div className="flex flex-col text-white gap-2 w-full md:w-4/12">
          <Logo />
          <p className="text-coolGray text-sm font-light my-4">
            This is your best spot for aestjetic vintage furniture of all time
          </p>
          <p className="text-sm flex space-x-2 items-center">
            <FaMapMarked className="" />
            <span className="text-sm">123 HNG.ng Street, Nigeria</span>
          </p>
          <p className="text-sm flex space-x-2 items-center">
            <FaPhone className="" />
            <span>+123 1234 1234</span>
          </p>
          <p className="text-sm flex space-x-2 items-center">
            <IoMdMailUnread className="" />{" "}
            <span>contact@tinbuexpress.com</span>
          </p>
          <div className="flex items-center justify-start gap-8 mt-6">
            <FaFacebookF className="" />
            <FaTwitter className="" />
            <FaInstagram className="" />
            <TfiYoutube className="" />
          </div>
        </div>

        <div className="flex items-start md:justify-start gap-16 md:gap-12 w-full md:w-4/12">
          <div className="flex flex-col gap-4">
            <h4 className="text-md uppercase font-semibold text-white">
              shopping
            </h4>
            <ul>
              {shoppingMenuItems.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-xs font-thin text-frenchGray"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md uppercase font-semibold text-white">
              more link
            </h4>
            <ul>
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-xs font-thin text-frenchGray"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-4/12 gap-4">
          <h4 className="text-md uppercase font-semibold text-white">
            from the blog
          </h4>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center space-x-1">
              <p className="text-md text-coolGray">26</p>
              <p className="text-xs text-coolGray text-thin">May</p>
            </div>
            <p className="text-frenchGray text-xs font-thin -tracking-tight leading-1">
              New Collection drop july 16, get your notification on.
            </p>
            <p className="text-coolGray text-xs">3 comments</p>
          </div>

          <hr className="border-coolGray min-w-full" />
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center space-x-1">
              <p className="text-md text-coolGray">26</p>
              <p className="text-xs text-coolGray text-thin">May</p>
            </div>
            <p className="text-frenchGray text-xs font-thin -tracking-tight leading-1">
              New Collection drop july 16, get your notification on.
            </p>
            <p className="text-coolGray font-light text-xs">3 comments</p>
          </div>
        </div>
      </div>
      <p className=" font-light text-xs text-center bg-darkGray text-frenchGray py-4">
        Yetunde.io & Codeplan &copy; - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
