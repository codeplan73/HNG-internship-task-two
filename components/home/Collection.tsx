import React from "react";
import CollectionCard from "./CollectionCard";
import { productCollection } from "@/data/products.json";

const Collection = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold">
          Browse Our Popular Collection
        </h2>
        <p className="text-neutral text-sm text-center">
          This are the most product from our collections you {`dont't`} want to
          miss out
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
        {productCollection.map((product) => (
          <CollectionCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
