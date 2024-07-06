// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const price = new Intl.NumberFormat("en-us", {
//     style: "currency",
//     currency: "USD",
//   }).format(product.price);

//   return (
//     <Link
//       href={`/products/${product.id}`}
//       className="flex flex-col gap-4 items-start cursor-pointer"
//     >
//       <Image
//         src={product.image}
//         alt={product.name}
//         height={1000}
//         width={1000}
//         className="max-w-md w-full md:h-72 object-cover"
//       />
//       <p className="text-sm font-semibold">{product.name}</p>
//       <p className="text-xl font-semibold">{price}</p>
//     </Link>
//   );
// };

// export default ProductCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  color: string[];
  image: string;
}

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
      className="flex flex-col gap-2 items-start cursor-pointer max-w-md"
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
