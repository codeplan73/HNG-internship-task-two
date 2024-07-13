"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "../ProductFilter";
import axios from "axios";
import { ProductItem } from "@/types";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Circles } from "react-loader-spinner";

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
    return (
      <div className="container w-full flex items-center justify-center p-4 mx-auto text-4xl rounded lg:max-w-7xl h-[50vh]">
        <div className="preloader">
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center w-full gap-10 py-10">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:px-16 lg:px-24">
        <ProductFilter />
        <div className="flex flex-col w-full col-span-3 gap-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-center md:text-2">
              Our Products
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex items-center justify-between w-full p-4 rounded-md bg-slate-50">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-gray-300 rounded-md shadow-md bg-frenchGray"
            >
              <FaChevronLeft className="" />
              <span> Prev</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Page</span> {currentPage}
            </div>
            <button
              onClick={nextPage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-300 rounded-md shadow-md bg-frenchGray"
            >
              <span> Next</span>
              <FaChevronRight className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
