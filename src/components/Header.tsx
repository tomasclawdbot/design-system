// Header Component
// Following raphaelsalaja's principle: Open knowledge, clear communication
// Using CSS animations instead of framer-motion (no SSR issues)

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Header() {
  return (
    <header className="header-animate border-b py-6 px-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight header-title-animate">
            Design System
          </h1>
          <p className="text-sm text-muted-foreground header-subtitle-animate">
            Built with intention
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => toast.success("Copied!")}
            className="btn-hover-scale"
          >
            Copy
          </Button>
          <Button
            onClick={() => toast.message("Design is thinking made visual")}
            className="btn-hover-scale"
          >
            Deploy
          </Button>
        </div>
      </div>
    </header>
  );
}
