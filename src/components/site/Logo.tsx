import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/gm-pharma-logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="GM Pharma — home"
      className={cn("group inline-flex items-center", className)}
    >
      <img
        src={logoImage}
        alt="GM Pharma"
        className="h-9 w-auto object-contain transition-transform group-hover:scale-105 sm:h-10"
      />
    </Link>
  );
}
