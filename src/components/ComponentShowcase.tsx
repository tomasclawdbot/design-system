// ComponentShowcase Component
// Demonstrates shadcn/ui components
// Following vercel-labs/next-skills: Proper component structure, accessible patterns

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function ComponentShowcase() {
  return (
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
            <CardDescription>Loading state placeholders (vercel-labs/next-skills)</CardDescription>
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
  );
}
