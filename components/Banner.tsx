import React from "react";

interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div
      className="w-full md:w-[100vw] bg-no-repeat bg-right md:bg-left bg-cover h-[40vh] flex items-center lg:pr-44 justify-center lg:justify-end p-12 md:p-0"
      style={{
        backgroundImage: "url('/hero-bg.jpeg')",
      }}
    >
      <p className="text-primaryColor md:text-center text-lg md:text-xl font-bold lg:pr-40">
        {title}
      </p>
    </div>
  );
};

export default Banner;
