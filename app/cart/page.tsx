"use client";

import React from "react";
import { useCart } from "@/provider/cartProvider";
import Image from "next/image";
import OrderSummary from "@/components/OrderSummary";
import { GiShoppingCart } from "react-icons/gi";

const CartPage = () => {
  const {
    items,
    totalItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useCart();

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <GiShoppingCart className="text-7xl text-primaryColor " />
        <p className="text-2xl md:text-4xl text-primaryColor">
          Your cart is empty
        </p>
      </div>
    );

  console.log(items);

  return (
    <div className="container flex flex-col items-start w-full gap-6 py-6 md:flex-row md:px-12 md:py-12">
      <div className="flex flex-col items-start w-full gap-6 md:w-full lg:w-8/12 lg:px-12">
        <p className="flex items-end space-x-2">
          <span className="text-xl font-bold">Cart</span>
          <span className="text-sm font-bold uppercase text-coolGray">
            {totalItem} items
          </span>
        </p>
        <div className="flex flex-col w-full gap-6 ">
          {items.map((item, index) => {
            const price = new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(Number(item.price));

            return (
              <div
                key={index}
                className="flex items-start justify-start w-full gap-8 pb-6 border-b-2 md:justify-between"
              >
                <div className="flex items-start space-x-8">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="w-32 h-32"
                  />
                  <div className="">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-wrap">{item.name}</p>
                      {/* <p className="flex items-start space-x-2">
                        <span>Color</span>
                        <span className="font-semibold">{item.color}</span>
                      </p> */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-6 p-2 px-4 border border-coolGray">
                          <button
                            onClick={() =>
                              decreaseItemQuantity(item.id.toString())
                            }
                            className="text-xl"
                          >
                            -
                          </button>
                          <p className="">{item.quantity}</p>
                          <button
                            onClick={() =>
                              increaseItemQuantity(item.id.toString())
                            }
                            className="text-xl"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id.toString())}
                          className="text-secondaryRed"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold">{price}</p>
              </div>
            );
          })}
        </div>

        <p className="p-2 border rounded-sm bg-green-50 border-primaryColor">
          <span className="px-2 text-lg text-primaryColor">%</span>
          <span className="text-sm">
            10% Instant Discount with Federal Bank Debit Card on a main Spend of
            $150. TCA
          </span>
        </p>
      </div>

      <OrderSummary text="Proceed to Checkout" link="/address" />
    </div>
  );
};

export default CartPage;
