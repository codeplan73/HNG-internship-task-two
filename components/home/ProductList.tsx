"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import { products } from "@/data/products";
import ProductFilter from "../ProductFilter";
import axios from "axios";
import { ProductItem } from "@/types";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");

      console.log(response.data.items);

      setProducts(response.data.items);
    };

    fetchProducts();
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="p-4 text-4xl bg-red-700 rounded">Loading...</div>;
  }

  return (
    <div className="container flex flex-col items-center w-full gap-10 py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold md:text-2 xl">Our Products</h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:px-16 lg:px-24">
        <ProductFilter />
        <div className="grid w-full grid-cols-1 col-span-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
