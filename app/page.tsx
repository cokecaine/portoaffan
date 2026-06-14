import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full pt-16">
      <Hero />
      <Skills />
      <Footer />
    </main>
  );
}
