import React from "react";
import { productCollection } from "@/data/products";
import Image from "next/image";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold">
          Browse Our Popular Collection
        </h2>
        <p className="text-neutral text-sm text-center">
          These are the most popular products from our collections you dont want
          to miss out on.
        </p>
      </div>
      {/* Fix: Updated the container to ensure it's scrollable on the x-axis on mobile devices */}
      <div className="flex flex-nowrap items-start gap-8 overflow-x-auto py-4`">
        {productCollection.map((product) => (
          <CollectionCard key={product.id} product={product} />
          // <div
          //   key={product.id}
          //   className="flex-shrink-0 flex flex-col gap-4 items-center hover:drop-shadow-2xl transition-all duration-300 ease-in-out cursor-pointer max-w-md"
          // >
          //   <Image
          //     src={product.image}
          //     alt={product.name}
          //     height={100}
          //     width={100}
          //     className="max-w-md w-full h-80 rounded-2xl shadow"
          //   />
          //   <p className="text-sm font-semibold">{product.name}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
