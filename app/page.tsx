import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nutrition } from "@/components/Nutrition";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <Hero />
        <Products />
        <Nutrition />
      </main>
    </div>
  );
}
