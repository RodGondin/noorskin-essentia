import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nutrition } from "@/components/Nutrition";
import { Products } from "@/components/Products";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <Hero />
        <div className="flex flex-col">
          <div className="order-1">
            <Products />
          </div>
          <div className="order-2 min-[1420px]:order-3">
            <Banner />
          </div>
          <div className="order-3 min-[1420px]:order-2">
            <Nutrition />
          </div>
        </div>
        <Reviews />
      </main>
    </div>
  );
}
