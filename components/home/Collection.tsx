import React from "react";
import { productCollection } from "@/data/products";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Browse Our Popular Collection
        </h2>
        <p className="text-neutral text-sm text-center">
          These are the most popular products from our collections you dont want
          to miss out on.
        </p>
      </div>
      <div className="flex flex-nowrap items-start gap-8 overflow-x-auto py-4`">
        {productCollection.map((product) => (
          <CollectionCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
