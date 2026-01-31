"use client";

// Client Component - Required for onClick handlers and dynamic imports with ssr: false
// Using CSS animations (no framer-motion, no SSR issues)

import dynamic from "next/dynamic";

// Dynamic imports to avoid SSR issues with client components
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Manifesto = dynamic(() => import("@/components/Manifesto"), { ssr: false });
const ComponentShowcase = dynamic(() => import("@/components/ComponentShowcase"), { ssr: false });
const DesignValues = dynamic(() => import("@/components/DesignValues"), { ssr: false });
const MinimalDark = dynamic(() => import("@/components/MinimalDark"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Toaster = dynamic(() => import("@/components/ui/sonner").then(mod => mod.Toaster), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-12 space-y-16">
        <Manifesto />
        <ComponentShowcase />
        <DesignValues />
        
        {/* Minimal Dark UI Showcase */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight animate-fade-up">
              Minimal Dark UI
            </h2>
            <p className="text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Clean, minimal aesthetic inspired by writenicecode. Subtle 1px borders, dark backgrounds, refined details.
            </p>
          </div>
          
          <div className="max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <MinimalDark.MinimalUIDemo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
