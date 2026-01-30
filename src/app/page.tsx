// Server Component - Performance optimization (vercel-labs/next-skills)
// See /skills/vercel-labs-next-skills.md

import { Metadata } from "next";
import Header from "@/components/Header";
import Manifesto from "@/components/Manifesto";
import ComponentShowcase from "@/components/ComponentShowcase";
import DesignValues from "@/components/DesignValues";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Design System | Built with Intention",
  description: "A design system inspired by 7 thinkers. Creates software as art, but never at the expense of function.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-12 space-y-16">
        <Manifesto />
        <ComponentShowcase />
        <DesignValues />
      </main>
      <Footer />
    </div>
  );
}
