import React from "react";
import Image from "next/image";
import { Collection } from "@/types";

interface CollectionCardProps {
  product: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col items-center flex-shrink-0 max-w-md gap-4 py-4 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
    >
      <Image
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="w-[182px] md:w-[210px] h-[200px] md:h-[250px] rounded-2xl shadow"
      />
      <p className="text-sm font-semibold">{product.name}</p>
    </div>
  );
};

export default CollectionCard;
