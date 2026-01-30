// DesignValues Component
// Core values that guide every decision
// Following raphaelsalaja's open knowledge: Document everything, share freely

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DesignValues() {
  return (
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
            &quot;50ms delay max&quot; not &quot;fast&quot;. Concrete targets enable precise execution.
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
  );
}
