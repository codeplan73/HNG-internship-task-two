import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";

const paymentMethod = [
  { id: 1, imgSrc: "/visa.png", card: "5643", expire: "Expires 11/2025" },
  { id: 2, imgSrc: "/master.png", card: "6754", expire: "Expires 06/2021" },
];

const Payment = () => {
  const Swal = require("sweetalert2");
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-start gap-6 py-6 md:px-12 md:py-12 w-full container">
      <div className="flex flex-col gap-8 items-start w-full  lg:w-8/12 lg:px-12">
        <div className="flex items-center gap-4 md:gap-12 w-full mb-8">
          <p className="text-lg font-semibold text-coolGray">Adress</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold text-coolGray">Shipping</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold ">Payment</p>
        </div>
        <h4 className="text-lg font-semibold">Payment Method</h4>
        <div className="border border-frenchGray flex flex-col w-full">
          {paymentMethod.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full border border-b p-4"
            >
              <div className="flex items-center gap-4 md:gap-4">
                <input type="radio" name="payment" id="" />
                <Image
                  src={item.imgSrc}
                  alt="card"
                  width={50}
                  height={50}
                  className="h-6 md:h-10 w-6 md:w-10"
                />
                <p className="font-semibold text-xs md:text-sm flex items-center -space-x-1 justify-start">
                  <GoDotFill />
                  <GoDotFill />
                  <GoDotFill />
                  <GoDotFill />
                  {item.card}
                </p>
                <p className="text-coolGray text-xs md:text-sm">
                  {item.expire}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full border border-frenchGray" />

        <button className="text-primaryColor flex items-center space-x-2 text-sm">
          <FiPlus /> <span>Add Payment Method</span>
        </button>
      </div>
      <OrderSummary text="Place your Order and Pay" link="/" />
    </div>
  );
};

export default Payment;
