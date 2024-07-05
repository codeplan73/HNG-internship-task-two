import Collection from "@/components/home/Collection";
import DiscountSale from "@/components/home/DiscountSale";
import Hero from "@/components/home/Hero";
import ProductList from "@/components/home/ProductList";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section>
        <Collection />
      </section>

      <section>
        <ProductList />
      </section>

      <section>
        <DiscountSale />
      </section>
    </div>
  );
}
