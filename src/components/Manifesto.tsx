// Manifesto Component
// Shows the 7 Thinkers and their principles
// Following raphaelsalaja's open knowledge principle: Document everything, share freely
// Animation: Origin-aware, stagger reveal from top-left

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

// Natural easing - framer-motion compatible cubic bezier
const ease = [0.16, 1, 0.3, 1] as const;

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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease
    }
  }
};

export default function Manifesto() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Manifesto</h2>
        <p className="text-muted-foreground max-w-2xl">
          Creates software as art, but never at the expense of function.
          Obsesses over details that compound, but knows when to stop.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {principles.map((p) => (
          <motion.div key={p.name} variants={item}>
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {p.icon}
                  </motion.span>
                  <Badge variant="secondary">{p.thinker}</Badge>
                </div>
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
