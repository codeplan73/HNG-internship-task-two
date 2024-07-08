import OrderSummary from "@/components/OrderSummary";
import { IoIosArrowForward } from "react-icons/io";

const shipment = [
  { id: 1, date: "01 Aug, 2024", type: "Regular Shipment", fee: "Free" },
  { id: 2, date: "01 Jul, 18", type: "Priority Shipping", fee: "$8.50" },
  {
    id: 3,
    date: (
      <div>
        <select>
          <option>Select Date</option>
        </select>
      </div>
    ),
    type: "Choose a date that works for you",
    fee: "Schedule",
  },
];

const Shipping = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-start gap-6 py-6 md:px-12 md:py-12 w-full container">
      <div className="flex flex-col gap-2 items-start w-full  lg:w-8/12 lg:px-12">
        <div className="flex items-center gap-4 md:gap-12 w-full mb-8">
          <p className="text-lg font-semibold text-coolGray">Adress</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold ">Shipping</p>
          <IoIosArrowForward className="text-coolGray text-lg" />
          <p className="text-lg font-semibold text-coolGray">Payment</p>
        </div>
        <h4 className="text-lg font-semibold">Shipment Method</h4>
        <div className="border border-frenchGray flex flex-col w-full">
          {shipment.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full border border-b p-4"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <input type="radio" name="shipment" id="" />
                <p className="font-semibold text-xs md:text-lg">{item.fee}</p>
                <p className="text-xs md:text-lg">{item.type}</p>
              </div>
              <p className="font-semibold text-xs md:text-lg">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <OrderSummary text="Continue to Payment" link="/payment" />
    </div>
  );
};

export default Shipping;
