import Collection from "@/components/home/Collection";
import DiscountSale from "@/components/home/DiscountSale";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section>
        <Collection />
      </section>

      <section>
        <p className="text-2xl">product and filter section</p>
      </section>

      <section>
        <DiscountSale />
      </section>
    </div>
  );
}
