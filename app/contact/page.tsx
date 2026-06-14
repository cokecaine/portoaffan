import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full pt-16">
      <Contact />
      <Footer />
    </main>
  );
}
