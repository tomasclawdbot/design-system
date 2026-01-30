// ComponentShowcase Component
// Demonstrates shadcn/ui components
// Following vercel-labs/next-skills: Proper component structure, accessible patterns
// Using CSS animations (no framer-motion, no SSR issues)

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function ComponentShowcase() {
  return (
    <section className="space-y-6">
      <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-3xl font-semibold tracking-tight">Components</h2>
        <p className="text-muted-foreground max-w-2xl">
          shadcn/ui + Tailwind. Accessible, composable, yours to modify.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Button Variants */}
        <Card className="animate-slide-left" style={{ animationDelay: "0.3s" }}>
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
              <Button 
                key={btn.variant} 
                variant={btn.variant as any}
                className="btn-hover-scale"
              >
                {btn.label}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Badge Variants */}
        <Card className="animate-slide-right" style={{ animationDelay: "0.35s" }}>
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
              <Badge 
                key={badge.variant} 
                variant={badge.variant as any}
                className="badge-hover-scale"
              >
                {badge.label}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Card Examples */}
        <Card className="animate-slide-left" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>Content containers with hierarchy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Card className="p-4 card-hover-scale">
              <p className="text-sm">Simple card content</p>
            </Card>
            <Card className="p-4 card-hover-scale">
              <CardTitle className="text-base">Card Title</CardTitle>
              <CardDescription>Card description text</CardDescription>
            </Card>
          </CardContent>
        </Card>

        {/* Skeleton Loader */}
        <Card className="animate-slide-right" style={{ animationDelay: "0.45s" }}>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
            <CardDescription>Loading state placeholders (vercel-labs/next-skills)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full skeleton-pulse" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
