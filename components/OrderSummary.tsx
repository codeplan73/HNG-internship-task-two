"use client";

import React from "react";
import { useCart } from "@/provider/cartProvider";
import { HiOutlineTag } from "react-icons/hi";
import formatCurrency from "@/lib/currencyFormatter";
import Button from "./Button";

interface ButtonProps {
  text: string;
  link: string;
}

const OrderSummary = ({ text, link }: ButtonProps) => {
  const { total, coupon, discount, totalPrice } = useCart();
  const formattedTotal = formatCurrency(total);
  const formattedDiscount = formatCurrency(discount);
  const formattedTotalPrice = formatCurrency(totalPrice);
  const formattedCoupon = formatCurrency(coupon);

  return (
    <div className="w-full md:w-3/12 py-6 px-6 border border-coolGray rounded-sm flex flex-col items-start gap-6">
      <h4 className="text-xl font-semibold">Order Summary</h4>
      <div className="flex flex-col w-full gap-4">
        <p className="flex items-center justify-between text-sm font-thin text-slate-600">
          <span>Price</span>
          <span>{formattedTotalPrice}</span>
        </p>
        <p className="flex items-center justify-between text-sm font-thin text-slate-600">
          <span>Discount</span>
          <span>{formattedDiscount}</span>
        </p>
        <p className="flex items-center justify-between text-sm font-thin text-slate-600">
          <span>Shipping</span>
          <span className="text-primaryColor">Free</span>
        </p>
        <p className="flex items-center justify-between text-sm font-thin text-slate-600">
          <span>Coupon Applied</span>
          <span>{formattedCoupon}</span>
        </p>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col w-full gap-6">
        <p className="flex items-center justify-between text-sm ">
          <span className=" font-thin text-slate-600">Total</span>
          <span className="font-semibold">{formattedTotal}</span>
        </p>
        <p className="flex items-center justify-between text-sm">
          <span className="  font-thin text-slate-600">
            Estimated Delivery By
          </span>
          <span className="font-semibold">03 Jul, 2024</span>
        </p>

        <div className="relative">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-3 py-2  border border-coolGray w-full"
          />
          <HiOutlineTag className="absolute top-3 right-3 text-lg" />
        </div>

        <Button text={text} link={link} />
      </div>
    </div>
  );
};

export default OrderSummary;
