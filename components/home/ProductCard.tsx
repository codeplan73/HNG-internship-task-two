import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types";

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(product.current_price[0].USD[0]);

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col items-start w-full gap-2 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-2xl"
    >
      <Image
        src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
        alt={product.name}
        width={1000}
        height={1000}
        className="w-full md:h-64 h-96"
      />

      <p className="text-sm font-semibold">{product.name}</p>
      <p className="text-xl font-semibold">{price}</p>
    </Link>
  );
};

export default ProductCard;
