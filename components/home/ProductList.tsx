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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await axios.get(
        `/api/products?page=${currentPage}&size=${pageSize}`
      );

      console.log(response.data.items);

      setProducts(response.data.items);
    };

    fetchProducts().finally(() => setLoading(false));
  }, [currentPage, pageSize]);

  // Pagination Controls
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

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

      <div className="flex items-center justify-center gap-4">
        <button onClick={prevPage} className="px-4 py-2 bg-gray-300 rounded">
          Prev
        </button>
        <div>
          <span>Page</span> {currentPage}
        </div>
        <button onClick={nextPage} className="px-4 py-2 bg-gray-300 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
