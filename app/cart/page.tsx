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
      <div className="flex flex-col gap-4 items-center justify-center py-20">
        <GiShoppingCart className="text-7xl text-primaryColor " />
        <p className="text-2xl md:text-4xl text-primaryColor">
          Your cart is empty
        </p>
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 py-6 md:px-12 md:py-12 w-full container">
      <div className="flex flex-col gap-6 items-start w-full md:w-full lg:w-8/12 lg:px-12">
        <p className="flex items-end space-x-2">
          <span className="text-xl font-bold">Cart</span>
          <span className="text-sm text-coolGray font-bold uppercase">
            {totalItem} items
          </span>
        </p>
        <div className="flex flex-col gap-6 w-full ">
          {items.map((item, index) => {
            const price = new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(Number(item.price));

            return (
              <div
                key={index}
                className="flex items-start justify-start gap-8 md:justify-between w-full  border-b-2 pb-6"
              >
                <div className="flex items-start space-x-8">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="h-32 w-32"
                  />
                  <div className="">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-wrap">{item.name}</p>
                      <p className="flex items-start space-x-2">
                        <span>Color</span>
                        <span className="font-semibold">{item.color}</span>
                      </p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-6 border border-coolGray p-2 px-4">
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
                <p className="font-semibold text-xl">{price}</p>
              </div>
            );
          })}
        </div>

        <p className="bg-green-50 p-2 rounded-sm border border-primaryColor">
          <span className="text-primaryColor text-lg px-2">%</span>
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
