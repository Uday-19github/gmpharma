import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="GM Pharma — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-xl font-display text-base font-extrabold tracking-tight shadow-soft transition-transform group-hover:scale-105",
          onDark
            ? "bg-primary-foreground/12 text-primary-foreground ring-1 ring-primary-foreground/25"
            : "gradient-teal text-primary-foreground",
        )}
      >
        GM
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            onDark ? "text-primary-foreground" : "text-navy",
          )}
        >
          GM PHARMA
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold tracking-[0.28em]",
            onDark ? "text-primary-foreground/70" : "text-primary",
          )}
        >
          PHARMA · NUTRA
        </span>
      </span>
    </Link>
  );
}
