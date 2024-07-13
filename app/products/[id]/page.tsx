"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardBackspace,
  MdStar,
  MdOutlineStarHalf,
} from "react-icons/md";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BsDot, BsHeart } from "react-icons/bs";
import { useCart } from "@/provider/cartProvider";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import axios from "axios";

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();
  const { addItem } = useCart();

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false in finally block
      }
    };

    fetchProducts();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(product.current_price);

  const renderStars = () => {
    const rating = parseFloat(product.extra_infos[0].value);
    const fullStars = Math.floor(rating);
    const halfStar =
      rating % 1 !== 0 ? (
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
    <div className="container flex flex-col gap-6 py-6 ">
      <div className="flex flex-col space-y-6 md:pl-6 lg:p-10">
        <Link href="/" className="text-coolGray">
          <MdOutlineKeyboardBackspace />
        </Link>
        <div className="flex items-center space-x-1 text-sm">
          <span className="text-coolGray">Product</span>
          <IoIosArrowForward />
          <span>{product.name}</span>
        </div>
      </div>
      <div className="flex flex-col-reverse items-start md:flex-row lg:flex-row">
        <div className="flex flex-col items-start w-full gap-6 md:w-6/12 lg:w-4/12 lg:pl-10 md:pl-6 md:px-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold md:text-4xl">{product.name}</h1>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-md md:text-xl">{price}</p>
              <p className="flex items-center text-coolGray">
                {renderStars()}
                {` ${product.extra_infos[0].value}/5.0`}
              </p>
            </div>
            <p className="text-sm text-gray ">{product.description}</p>
            {/* <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {product.color.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setSelectedColor(color);
                      console.log(color);
                    }}
                    className={`w-4 h-4 rounded-full cursor-pointer ${
                      selectedColor === color
                        ? "border-2 border-darkGray"
                        : "border border-transparent"
                    }`}
                    title={color}
                  ></div>
                ))}
              </div>
            </div> */}
          </div>

          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center gap-4 p-2 px-4 border border-coolGray">
              <button onClick={decreaseQuantity} className="text-xl">
                -
              </button>
              <p className="">{quantity}</p>
              <button onClick={increaseQuantity} className="text-xl">
                +
              </button>
            </div>
            <button
              onClick={() => {
                addItem({
                  ...product,
                  id: product.id,
                  // product_id: product.id,
                  quantity: quantity,
                  price: product.current_price,
                  image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
                });
                router.push("/cart");
              }}
              className="px-4 py-3 text-white rounded bg-primaryColor text-md"
            >
              Add to cart
            </button>
          </div>

          <div className="flex items-center">
            <p className="text-xs">Free 3-5 day shipping</p>
            <BsDot />
            <p className="text-xs">Tool-free assembly</p>
            <BsDot />
            <p className="text-xs">30-day trial </p>
          </div>

          <button className="flex items-center space-x-1 text-xs text-primaryColor">
            <BsHeart />
            <span>Add to wishlist</span>
          </button>
        </div>

        <div className="flex items-center justify-center w-full py-10 mx-auto md:w-6/12 lg:w-8/12 md:-mt-10 lg:px-20">
          <Image
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            width={1000}
            height={1000}
            className="object-cover lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
