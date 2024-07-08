import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import ProductFilter from "../ProductFilter";

const ProductList = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold">Our Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full md:px-16 lg:px-24">
        <ProductFilter />
        <div className="col-span-3 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
