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
      key={product.id}
      className="flex-shrink-0 flex py-4 flex-col gap-4 items-center hover:drop-shadow-2xl transition-all duration-300 ease-in-out cursor-pointer max-w-md"
    >
      <Image
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="w-[182px] md:w-[210px] h-[200px] md:h-[250px] rounded-2xl shadow"
      />
      <p className="text-sm font-semibold">{product.name}</p>
    </Link>
  );
};

export default CollectionCard;
