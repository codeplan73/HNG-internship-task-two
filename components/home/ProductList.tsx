import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductList = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold">Our Products</h2>
      </div>
      <div className="flex gap-8 items-start">
        <div className="hidden md:w-3/12 md:flex flex-col col-span-1">
          <h3>Arch Duke Flur</h3>
          <p>
            The Arch Duke Flur is an exquisite blend of luxury and
            sophistication, designed for the discerning individual who values
            elegance and timeless style in their collection.
          </p>
          <p>$10.0</p>
        </div>
        <div className="w-full md:w-9/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
