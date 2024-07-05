import React from "react";
import Link from "next/link";
import { TfiShoppingCart } from "react-icons/tfi";
import { BiMenuAltRight } from "react-icons/bi";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-primaryColor z-0">
      <p className="text-pirmaryColor text-xl md:text-2xl font-bold pr-1">
        TimbuExpress
      </p>
      <div className="relative flex z-0">
        <TfiShoppingCart className="text-xl text-primaryColor -inset-1" />
        <BiMenuAltRight className="flip-180 text-xl text-primaryColor absolute -Z-0" />
      </div>
    </Link>
  );
};

export default Logo;
