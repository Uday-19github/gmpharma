import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
  as: Tag = "h2",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-3 text-xs font-bold tracking-[0.24em] uppercase",
            align === "center" && "justify-center",
            onDark ? "text-primary-foreground/80" : "text-primary",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-8", onDark ? "bg-primary-foreground/50" : "bg-primary/60")}
          />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-4 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.6rem]",
          onDark ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.05rem]",
            onDark ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
