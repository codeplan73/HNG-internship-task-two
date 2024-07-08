import React from "react";
import { GrFilter } from "react-icons/gr";

const rooms = [
  {
    id: 1,
    name: "Bed Room",
    items: [
      { id: 1, name: "Duvet Cover Sets" },
      { id: 2, name: "Sheet" },
      { id: 3, name: "Blankets" },
      { id: 5, name: "Curtain" },
      { id: 6, name: "Pillowcase" },
      { id: 7, name: "Rug" },
    ],
  },
  { id: 2, name: "Living Room" },
  { id: 3, name: "Child Room" },
  { id: 4, name: "Bathroom" },
  { id: 5, name: "Outdoor" },
];

const concept = [
  { id: 1, name: "Conscious" },
  { id: 2, name: "Premium Quality" },
  { id: 3, name: "Classic Collection" },
];

const price = [
  { id: 1, low: "$0", high: "$40" },
  { id: 2, low: "$40", high: "$100" },
  { id: 3, low: "$100", high: "$150" },
  { id: 4, low: "$150", high: "$175" },
  { id: 5, low: "$175", high: "$250" },
  { id: 6, low: "$250", high: "3250" },
];

const ProductFilter = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex md:hidden items-center space-x-2">
        <GrFilter className="" />
        <p>Sort & Filter</p>
      </div>
      <div className="col-span-1 hidden gap-8 md:flex md:flex-col w-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold nowrap">New Arrivals</h4>
          <p className="text-sm text-coolGray">New Arrivals</p>
        </div>

        <div className="flex flex-col pl-4">
          <h4 className="text-md font-semibold nowrap">Shop By Room</h4>

          {rooms.map((room, roomIndex) => (
            <div key={room.id} className="flex flex-col gap-2 ">
              <span
                className={`cursor-pointer hover:text-primaryColor ${
                  roomIndex === 0 ? "text-red-500" : ""
                }`}
              >
                {room.name}
              </span>
              {room.items &&
                room.items.map((item) => (
                  <span
                    key={item.id}
                    className={`cursor-pointer hover:text-primaryColor pl-4`}
                  >
                    {item.name}
                  </span>
                ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2  pl-4">
          <h4 className="text-md font-semibold nowrap">Shop By Concept</h4>
          <div>
            {concept.map((c) => (
              <div key={c.id} className="flex items-center gap-2">
                <span className="cursor-pointer hover:text-primaryColor">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2  pl-4">
          <h4 className="text-md font-semibold nowrap">Price</h4>
          <div>
            {price.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-2 hover:text-primaryColor"
              >
                <input type="checkbox" />
                <span>
                  {p.low} - {p.high}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
