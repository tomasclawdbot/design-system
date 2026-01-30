// DesignValues Component
// Core values that guide every decision
// Following raphaelsalaja's open knowledge: Document everything, share freely
// Animation: Smooth fade in, subtle hover lift

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function DesignValues() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Design Values</h2>
        <p className="text-muted-foreground max-w-2xl">
          Core principles that guide every decision.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-3"
      >
        {values.map((v) => (
          <motion.div key={v.title} variants={item}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="p-6 h-full">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
