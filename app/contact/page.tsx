import React from "react";
import Banner from "@/components/Banner";
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div>
      <Banner title="Contact us" />
      <section className="container py-12 lg:px-20 flex flex-col md:flex-row gap-8 items-start justify-start w-full">
        <div className="flex flex-col items-start gap-8 w-full lg:w-4/12">
          <div className="bg-frenchGray p-8 rounded-md flex flex-col gap-6 items-start w-full  max-w-md px-10">
            <h4 className="text-lg md:text-xl font-bold text-neutral">
              Nigeria
            </h4>
            <p className="flex space-x-2 items-start">
              <FiMapPin className="" />
              <span>123, HNG.ng Street, Nigeria</span>
            </p>
            <p className="flex space-x-2 items-start">
              <FiPhoneCall className="" />
              <span>08032939239</span>
            </p>
          </div>
          <div className="bg-frenchGray p-8 rounded-md flex flex-col w-full gap-6 items-start max-w-md px-10 pr-16">
            <h4 className="text-lg md:text-xl font-bold text-neutral">USA</h4>
            <p className="flex space-x-2 items-start">
              <FiMapPin className="" />
              <span>123, HNG.ng Street, USA</span>
            </p>
            <p className="flex space-x-2 items-start">
              <FiPhoneCall className="" />
              <span>+132939239</span>
            </p>
          </div>
        </div>
        <form className="w-full lg:w-8/12 rounded-lx drop-shadow-xl shadow-xl flex flex-col gap-8 p-8 rounded-md">
          <h4 className="text-xl font-bold">Send Us Message</h4>
          <input
            type="text"
            name=""
            className="px-4 py-4 rounded-full border border-primaryColor"
            placeholder="Name"
            id=""
          />
          <input
            type="email"
            name=""
            className="px-4 py-4 rounded-full border border-primaryColor"
            placeholder="Email"
            id=""
          />
          <input
            type="text"
            name=""
            className="px-4 py-4 rounded-full border border-primaryColor"
            placeholder="Subject"
            id=""
          />
          <textarea
            className="px-4 py-4 rounded-lg border border-primaryColor"
            placeholder="Message"
          ></textarea>

          <button className="bg-primaryColor text-white py-4 rounded-full lg:w-32">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
