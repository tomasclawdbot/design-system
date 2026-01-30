"use client";

// Header Component
// Following raphaelsalaja's principle: Open knowledge, clear communication

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Header() {
  return (
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
  );
}
