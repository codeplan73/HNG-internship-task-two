import Banner from "@/components/Banner";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <Banner title="About us" />
      <section className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full items-center justify-center py-12">
          <h4 className="text-xl font-bold">Our Story</h4>
          <p className="text-lg">
            Founded in 2000, TinbuExpress began with a simple idea: to create a
            one-stop shop for high-quality, aesthetically pleasing home decor
            items that cater to every taste and need. What started as a small
            local business has grown into a beloved brand known for its
            exceptional customer service and a curated selection of home
            essentials.
          </p>
        </div>
        <div className="w-full items-start justify-start flex flex-col md:flex-col lg:flex-row gap-8">
          <div className="w-full md:w-full lg:w-6/12">
            <Image
              src="/about/about-us.png"
              alt="About-us"
              width={1000}
              height={1000}
              className="w-full lg:h-[80vh]"
            />
          </div>
          <div className="w-full md:w-full lg:w-6/12">
            <div className="flex flex-col gap-6 w-full items-center justify-center ">
              <h4 className="text-xl font-bold">What we offer</h4>
              <p>
                At TumbleExpress, we believe that every home should reflect the
                personality and lifestyle of its inhabitants. That’s why we
                offer a diverse array of products designed to inspire and
                delight:
              </p>
              <p>
                Furniture, Curtains, Beds & Bedsheets, Candles, Baby Cribs,
                Blankets, Mirrors, Stool, Shelf,Racks, WallPaper, etc.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full items-center justify-center ">
              <h4 className="text-xl font-bold">Our Commitment</h4>
              <p>
                We are committed to providing our customers with products that
                are not only beautiful but also durable and affordable. Each
                item in our store is carefully selected for its quality and
                craftsmanship, ensuring that it meets our high standards. Why
                Choose Us?
              </p>
              <ul className="flex flex-col items-start pl-4 list-circle gap-3">
                <li className="list-disc">
                  Quality Products: We source our products from trusted
                  manufacturers and artisans who share our passion for quality
                  and design.
                </li>
                <li className="list-disc">
                  Exceptional Service: Our friendly and knowledgeable staff are
                  always here to help you find exactly what you’re looking for.
                </li>
                <li className="list-disc">
                  Satisfaction Guaranteed: We stand behind every product we
                  sell. If you’re not completely satisfied, we’ll make it right.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center justify-center py-12">
          <h4 className="text-xl font-bold">Visit Us Today</h4>
          <p className="text-lg">
            Come visit our store in your Nigeria and USA or explore our online
            catalog to discover the perfect pieces for your home. Whether you’re
            redecorating a single room or furnishing an entire house,
            TumbleExpress is here to help you every step of the way.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
