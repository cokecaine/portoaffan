import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Affan Ilham Arsyilla",
  description:
    "Selected projects by Affan Ilham Arsyilla — from AI-powered systems to mobile apps and consulting work.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full pt-16">
      <Projects />
      <Footer />
    </main>
  );
}
