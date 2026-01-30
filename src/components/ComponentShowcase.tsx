// ComponentShowcase Component
// Demonstrates shadcn/ui components
// Following vercel-labs/next-skills: Proper component structure, accessible patterns
// Animation: Smooth reveal, origin-aware hover states

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Natural easing - framer-motion compatible cubic bezier
const ease = [0.16, 1, 0.3, 1] as const;

export default function ComponentShowcase() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Components</h2>
        <p className="text-muted-foreground max-w-2xl">
          shadcn/ui + Tailwind. Accessible, composable, yours to modify.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Button Variants */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Multiple variants for different contexts</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {[
                { variant: "default", label: "Default" },
                { variant: "secondary", label: "Secondary" },
                { variant: "destructive", label: "Destructive" },
                { variant: "outline", label: "Outline" },
                { variant: "ghost", label: "Ghost" },
                { variant: "link", label: "Link" },
              ].map((btn) => (
                <motion.div
                  key={btn.variant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant={btn.variant as any}>{btn.label}</Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Badge Variants */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5, ease }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {[
                { variant: "default", label: "Default" },
                { variant: "secondary", label: "Secondary" },
                { variant: "destructive", label: "Destructive" },
                { variant: "outline", label: "Outline" },
              ].map((badge) => (
                <motion.div
                  key={badge.variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant={badge.variant as any}>{badge.label}</Badge>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Card Examples */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Content containers with hierarchy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="p-4">
                  <p className="text-sm">Simple card content</p>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="p-4">
                  <CardTitle className="text-base">Card Title</CardTitle>
                  <CardDescription>Card description text</CardDescription>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skeleton Loader */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5, ease }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>Loading state placeholders (vercel-labs/next-skills)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Skeleton className="h-12 w-12 rounded-full" />
                </motion.div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
