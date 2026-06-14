import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience & Skills — Affan Ilham Arsyilla",
  description:
    "Professional experience and technical skills of Affan Ilham Arsyilla — internships, international collaborations, and the tools he works with.",
};

export default function ExperiencePage() {
  return (
    <main className="flex flex-col w-full pt-16">
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
