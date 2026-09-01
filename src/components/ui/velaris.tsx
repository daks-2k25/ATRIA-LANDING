import { cn } from "@/lib/utils";

export function Velaris({ className }: { className?: string }) {
  return <div aria-hidden className={cn("velaris-bg", className)} />;
}
