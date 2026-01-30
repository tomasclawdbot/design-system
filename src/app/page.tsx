"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// Design Principles - The 7 Thinkers
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

// Component Showcase
const components = [
  { name: "Button", desc: "Interactive action trigger" },
  { name: "Card", desc: "Content container with hierarchy" },
  { name: "Badge", desc: "Status indicator, labels" },
  { name: "Separator", desc: "Visual division" },
  { name: "Skeleton", desc: "Loading state placeholder" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />

      {/* Header */}
      <header className="border-b py-6 px-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Design System</h1>
            <p className="text-sm text-muted-foreground">Built with intention</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toast.success("Copied!")}>
              Copy
            </Button>
            <Button onClick={() => toast.message("Design is thinking made visual")}>
              Deploy
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12 space-y-16">

        {/* Manifesto */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Manifesto</h2>
            <p className="text-muted-foreground max-w-2xl">
              Creates software as art, but never at the expense of function.
              Obsesses over details that compound, but knows when to stop.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.name} className="group hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{p.icon}</span>
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

        <Separator />

        {/* Components */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Components</h2>
            <p className="text-muted-foreground max-w-2xl">
              shadcn/ui + Tailwind. Accessible, composable, yours to modify.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Button Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>Multiple variants for different contexts</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </CardContent>
            </Card>

            {/* Badge Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>

            {/* Card Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Content containers with hierarchy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="p-4">
                  <p className="text-sm">Simple card content</p>
                </Card>
                <Card className="p-4">
                  <CardTitle className="text-base">Card Title</CardTitle>
                  <CardDescription>Card description text</CardDescription>
                </Card>
              </CardContent>
            </Card>

            {/* Skeleton Loader */}
            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>Loading state placeholders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Design Values */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Design Values</h2>
            <p className="text-muted-foreground max-w-2xl">
              Core principles that guide every decision.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Origin-Aware</h3>
              <p className="text-sm text-muted-foreground">
                Animation should feel like it's coming from somewhere. Intentional motion, not random movement.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Specific Numbers</h3>
              <p className="text-sm text-muted-foreground">
                "50ms delay max" not "fast". Concrete targets enable precise execution.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Living Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Docs that evolve with the product. No stale wikis, no outdated screenshots.
              </p>
            </Card>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-8 mt-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <p>Design System v1.0</p>
          <p>Inspired by @ryolu_, @emilkowalski, @raunofreiberg, @nandafyi, @joshpuckett, @raphaelsalaja, @avstorm, @benjitaylor</p>
        </div>
      </footer>
    </div>
  );
}
