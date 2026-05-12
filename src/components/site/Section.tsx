import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow, title, sub, align = "start", className,
}: { eyebrow?: string; title: ReactNode; sub?: ReactNode; align?: "start" | "center"; className?: string }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}
