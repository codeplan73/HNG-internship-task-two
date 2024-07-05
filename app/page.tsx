import Collection from "@/components/home/Collection";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section>
        <Collection />
      </section>
    </div>
  );
}
