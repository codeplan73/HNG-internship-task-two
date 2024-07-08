import React from "react";
import Link from "next/link";

const DiscountSale = () => {
  return (
    <div
      className="w-full md:w-[100vw] bg-no-repeat bg-bottom  bg-cover h-[60vh] px-12 md:h-[73vh] flex items-center justify-center md:justify-start"
      style={{
        backgroundImage: "url('/footer-hero.png')",
      }}
    >
      <div
        className="bg-white w-full  md:px-24 md:py-16 md:w-5/12 md:ml-36 flex px-16 py-8 flex-col gap-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <h4 className="text-2xl text-primaryColor font-bold uppercase">
          bedsheet sets
        </h4>
        <div className="flex items-center text-neutral gap-4">
          <p className="text-2xl font-bold">$50.00</p>
          <p className="md font-bold line-through">$220.00</p>
        </div>
        <p className="text-sm font-thin tracking-wide text-coolGray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          ducimus natus nemo.
        </p>
        <Link
          className="text-primaryColor uppercase font-semibold border border-primaryColor px-4 py-2 text-center w-36 hover:bg-primaryColor hover:text-white transition-colors"
          href="/"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default DiscountSale;
