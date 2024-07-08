import OrderSummary from "@/components/OrderSummary";
import React, { useState } from "react";

const Shipping = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 py-6 md:px-12 md:py-12 w-full container">
      <div className="flex flex-col gap-6 items-start w-full md:w-8/12 md:px-12"></div>
      <OrderSummary text="Continue to Payment" link="/payment" />
    </div>
  );
};

export default Shipping;
