"use client";

// Header Component
// Following raphaelsalaja's principle: Open knowledge, clear communication
// Animation: Origin-aware, subtle entrance from top

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Natural easing - framer-motion compatible cubic bezier
const ease = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="border-b py-6 px-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease }}
            className="text-2xl font-bold tracking-tight"
          >
            Design System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            Built with intention
          </motion.p>
        </div>
        <div className="flex gap-2">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4, ease }}
          >
            <Button
              variant="outline"
              onClick={() => toast.success("Copied!")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Copy
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease }}
          >
            <Button
              onClick={() => toast.message("Design is thinking made visual")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Deploy
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
