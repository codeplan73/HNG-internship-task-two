"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardBackspace,
  MdStar,
  MdOutlineStarHalf,
} from "react-icons/md";
import Link from "next/link";
import { products } from "@/data/products";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  const [color, setColor] = useState<null | string>(null);
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  // Function to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar =
      product.rating % 1 ? (
        <MdOutlineStarHalf className="text-secondaryYellow" />
      ) : null;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill(<MdStar className="text-secondaryYellow" />)}
        {halfStar}
        {Array(emptyStars).fill(<MdStar className="text-coolGray" />)}
      </>
    );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row container ">
      <div className="w-full md:w-4/12 p-10 flex flex-col gap-6 items-start">
        <Link href="/" className="text-coolGray">
          <MdOutlineKeyboardBackspace />
        </Link>
        <div className="flex items-center space-x-1 text-sm">
          <span className="text-coolGray">Product</span>
          <IoIosArrowForward />
          <span>{product.name}</span>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl md:text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center justify-between">
            <p className="text-md md:text-xl font-semibold">{price}</p>
            <p className="text-coolGray flex items-center">
              {renderStars()}
              {product.rating}/5.0 ({product.totalRating})
            </p>
          </div>
          <p className="text-sm text-gray">{product.description}</p>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              {product.color.map((color, index) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setColor(product.color[index]);
                    console.log(color);
                  }}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  title={color}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-8/12 py-10 mx-auto px-20 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="h-96 w-96 object-cover"
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
