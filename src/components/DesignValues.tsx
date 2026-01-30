// DesignValues Component
// Core values that guide every decision
// Following raphaelsalaja's open knowledge: Document everything, share freely
// Using CSS animations (no framer-motion, no SSR issues)

import { Card } from "@/components/ui/card";

const values = [
  {
    title: "Origin-Aware",
    desc: "Animation should feel like it's coming from somewhere. Intentional motion, not random movement."
  },
  {
    title: "Specific Numbers",
    desc: "\"50ms delay max\" not \"fast\". Concrete targets enable precise execution."
  },
  {
    title: "Living Documentation",
    desc: "Docs that evolve with the product. No stale wikis, no outdated screenshots."
  }
];

export default function DesignValues() {
  return (
    <section className="space-y-6">
      <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-3xl font-semibold tracking-tight">Design Values</h2>
        <p className="text-muted-foreground max-w-2xl">
          Core principles that guide every decision.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 stagger-children">
        {values.map((v, i) => (
          <Card 
            key={v.title} 
            className="p-6 h-full value-card-animate"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
          >
            <h3 className="font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
