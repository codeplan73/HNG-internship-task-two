import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CollectionCardProps {
  product: Product;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="w-full h-56 md:h-full aspect-auto rounded-2xl shadow"
      />
      <h4>{product.name}</h4>
    </div>
  );
};

export default CollectionCard;
