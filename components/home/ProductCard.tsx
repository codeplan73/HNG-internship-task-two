import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col gap-2 items-start cursor-pointer w-full hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={1000}
        height={1000}
        className="md:h-64 h-96  w-full"
      />

      <p className="text-sm font-semibold">{product.name}</p>
      <p className="text-xl font-semibold">{price}</p>
    </Link>
  );
};

export default ProductCard;
