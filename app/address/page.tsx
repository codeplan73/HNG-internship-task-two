import OrderSummary from "@/components/OrderSummary";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const Shipping = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-start gap-12 py-6 md:px-12 md:py-12 w-full container">
      <div className="flex flex-col gap-12 items-start w-full md:w-full lg:w-8/12 lg:px-12">
        <div className="flex items-center gap-4 md:gap-12 w-full">
          <p className="text-lg font-semibold">Adress</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold text-coolGray">Shipping</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold text-coolGray">Payment</p>
        </div>

        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex flex-col md:flex-row  items-start md:items-center gap-4 justify-between w-full">
              <div className="flex items-start gap-6">
                <input
                  className="focus:text-primaryColor mt-1 ring-primaryColor"
                  type="radio"
                  name="address"
                  id=""
                />
                <p className="hng font-bold">HNG Nigeria</p>
                <span className="text-primaryColor text-xs border border-primaryColor rounded-sm p-1 ml-8">
                  HOME
                </span>
              </div>

              <div className="flex items-center gap-4 pl-9 md:pl-0">
                <button className="text-sm text-neutral font-semibold">
                  Edit
                </button>
                |
                <button className="text-secondaryRed text-sm font-semibold">
                  Remove
                </button>
              </div>
            </div>
            <p className="pl-9 text-xs">
              1131 Online marketing way, Slack Street Nigeria
            </p>
            <p className="flex pl-9 text-xs space-x-1">
              <span className="font-semibold">Contact</span>
              <span>-(234) 1234-1234</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex flex-col md:flex-row  items-start md:items-center gap-4 justify-between w-full">
              <div className="flex items-start gap-6">
                <input
                  className="focus:text-primaryColor mt-1 ring-primaryColor"
                  type="radio"
                  name="address"
                  id=""
                />
                <p className="hng font-bold">STAGE 2</p>
                <span className="text-primaryColor text-xs border border-primaryColor rounded-sm p-1 ml-8">
                  HOME
                </span>
              </div>

              <div className="flex items-center gap-4 pl-9 md:pl-0">
                <button className="text-sm text-neutral font-semibold">
                  Edit
                </button>
                |
                <button className="text-secondaryRed text-sm font-semibold">
                  Remove
                </button>
              </div>
            </div>
            <p className="pl-9 text-xs">
              1324 Stage Two Junction, Along Figma Way, Nigeria
            </p>
            <p className="flex pl-9 text-xs space-x-1">
              <span className="font-semibold">Contact</span>
              <span>-(234) 1234-1234</span>
            </p>
          </div>
        </div>

        <hr className="w-full border border-frenchGray" />

        <button className="text-primaryColor flex items-center space-x-2 text-sm">
          <FiPlus /> <span>Add New Address</span>
        </button>
      </div>

      <OrderSummary text="Continue to Shipping" link="/shipping" />
    </div>
  );
};

export default Shipping;
