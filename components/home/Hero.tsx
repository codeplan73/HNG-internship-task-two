import React from "react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div
      className="w-full md:w-[100vw] bg-no-repeat bg-right md:bg-left bg-cover h-[50vh] md:h-[70vh] flex items-center justify-center md:justify-end p-12 md:p-0"
      style={{
        backgroundImage: "url('/hero-bg.jpeg')",
      }}
    >
      <div
        className="flex items-start justify-end gap-8 flex-col p-8 w-full md:w-4/12 md:mr-56 md:mt-24 rounded-md"
        style={{ backgroundColor: "rgba(160, 170, 191, 0.4)" }}
      >
        <div className="flex flex-col">
          <p className="text-xs text-neutral font-thin mb-2">New Arrival</p>
          <h2 className="text-2xl md:text-4xl text-primaryColor font-semibold leading-tight">
            Discover Our
          </h2>
          <h2 className="text-2xl md:text-4xl text-primaryColor font-semibold">
            New Collection
          </h2>
          <p className="text-neutral text-xs font-thin mt-2">
            Cheaper than you ever expect
          </p>
        </div>
        <Button
          link="/"
          className="w-32 cursor-pointer text-white"
          text="Add to cart"
        />
      </div>
    </div>
  );
};

export default Hero;
