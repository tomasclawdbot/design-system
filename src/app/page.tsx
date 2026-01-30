// Server Component - Performance optimization (vercel-labs/next-skills)
// See /skills/vercel-labs-next-skills.md

import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with framer-motion
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Manifesto = dynamic(() => import("@/components/Manifesto"), { ssr: false });
const ComponentShowcase = dynamic(() => import("@/components/ComponentShowcase"), { ssr: false });
const DesignValues = dynamic(() => import("@/components/DesignValues"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Toaster = dynamic(() => import("@/components/ui/sonner").then(mod => mod.Toaster), { ssr: false });

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
