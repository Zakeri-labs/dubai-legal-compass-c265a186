import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function SupportedLanguages({
  label,
  className,
  iconClassName,
  textClassName,
}: {
  label: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("flex items-start gap-2.5", className)}>
      <Languages className={cn("mt-0.5 h-4 w-4 shrink-0 text-gold", iconClassName)} />
      <span className={cn("text-xs font-medium", textClassName)}>{label}</span>
    </div>
  );
}
