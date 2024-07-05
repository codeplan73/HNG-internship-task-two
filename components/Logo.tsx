import React from "react";
import Link from "next/link";
import { TfiShoppingCart } from "react-icons/tfi";
import { BiMenuAltRight } from "react-icons/bi";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-primaryColor">
      <p className="text-pirmaryColor text-xl md:text-2xl font-bold pr-1">
        TimbuExpress
      </p>
      <div className="relative flex">
        <TfiShoppingCart className="text-xl text-primaryColor" />
        <BiMenuAltRight className="flip-180 text-xl text-primaryColor absolute -right-4" />
      </div>
    </Link>
  );
};

export default Logo;
