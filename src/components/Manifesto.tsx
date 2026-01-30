// Manifesto Component
// Shows the 7 Thinkers and their principles
// Following raphaelsalaja's open knowledge principle: Document everything, share freely
// Using CSS animations (no framer-motion, no SSR issues)

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const principles = [
  {
    name: "Subtraction First",
    thinker: "@ryolu_",
    desc: "What should we NOT build? Start by removing, not adding.",
    icon: "−"
  },
  {
    name: "Micro-Details Matter",
    thinker: "@emilkowalski",
    desc: "50ms delays. Scale 0.9. Small interactions compound.",
    icon: "◐"
  },
  {
    name: "Form + Function",
    thinker: "@raunofreiberg",
    desc: "Beauty without function is art. Function without beauty is utility. Both or neither.",
    icon: "◈"
  },
  {
    name: "Think Slower, Act Fast",
    thinker: "@nandafyi",
    desc: "Pause on big decisions. Execute decisively once decided.",
    icon: "◎"
  },
  {
    name: "Show, Don't Tell",
    thinker: "@joshpuckett",
    desc: "GIFs, before/afters, visual demos. Prove it with evidence.",
    icon: "◇"
  },
  {
    name: "Open Knowledge",
    thinker: "@raphaelsalaja",
    desc: "No paywalls. Document everything. Share freely.",
    icon: "◉"
  },
  {
    name: "AI as Collaborator",
    thinker: "@benjitaylor",
    desc: "Amplify humans, never replace. Build tools that understand interfaces.",
    icon: "⬡"
  }
];

export default function Manifesto() {
  return (
    <section className="space-y-6">
      <div className="space-y-2 animate-fade-up">
        <h2 className="text-3xl font-semibold tracking-tight">Manifesto</h2>
        <p className="text-muted-foreground max-w-2xl">
          Creates software as art, but never at the expense of function.
          Obsesses over details that compound, but knows when to stop.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 stagger-children">
        {principles.map((p, i) => (
          <Card 
            key={p.name} 
            className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 card-animate"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl icon-hover">{p.icon}</span>
                <Badge variant="secondary">{p.thinker}</Badge>
              </div>
              <CardTitle className="text-lg">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
