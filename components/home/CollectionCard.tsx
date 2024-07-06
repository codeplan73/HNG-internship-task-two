import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface CollectionCardProps {
  product: Product;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col gap-4 items-center hover:drop-shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
    >
      <Image
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="max-w-md w-full h-80 rounded-2xl shadow"
      />
      <p className="text-sm font-semibold">{product.name}</p>
    </Link>
  );
};

export default CollectionCard;
