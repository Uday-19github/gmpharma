import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb?: string;
}) {
  return (
    <section className="gradient-navy relative overflow-hidden">
      <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-40" />
      <div className="container-page relative py-16 sm:py-20">
        <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold text-navy-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
            {description}
          </p>
        ) : null}
        <nav
          aria-label="Breadcrumb"
          className="mt-7 flex items-center gap-2 text-xs text-navy-foreground/70"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-navy-foreground">{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  );
}
