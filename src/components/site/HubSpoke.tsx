import {
  Atom,
  Beaker,
  ClipboardList,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Pill,
  Sparkles,
  TestTubes,
} from "lucide-react";

import { Reveal } from "./Reveal";

const left = [
  { label: "Pharmaceutical Manufacturing", Icon: Factory },
  { label: "Nutraceutical Manufacturing", Icon: Leaf },
  { label: "API", Icon: Atom },
  { label: "CMO", Icon: Beaker },
  { label: "CDMO", Icon: FlaskConical },
];

const right = [
  { label: "CRO", Icon: ClipboardList },
  { label: "Animal Health Products", Icon: Sparkles },
  { label: "Vitamins", Icon: Pill },
  { label: "Flavors & Fragrances", Icon: TestTubes },
  { label: "Fine & Specialty Chemicals", Icon: Globe2 },
];

export function HubSpoke() {
  return (
    <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <div className="space-y-3">
        {left.map((item, index) => (
          <Spoke key={item.label} {...item} delay={index * 70} side="left" />
        ))}
      </div>

      <Reveal className="mx-auto grid size-40 place-items-center rounded-full gradient-teal text-center shadow-lift sm:size-48">
        <div>
          <p className="font-display text-2xl font-extrabold text-primary-foreground sm:text-3xl">
            GM
          </p>
          <p className="mt-1 text-[0.6rem] font-semibold tracking-[0.3em] text-primary-foreground/85">
            PHARMA
          </p>
        </div>
      </Reveal>

      <div className="space-y-3">
        {right.map((item, index) => (
          <Spoke key={item.label} {...item} delay={index * 70} side="right" />
        ))}
      </div>
    </div>
  );
}

function Spoke({
  label,
  Icon,
  delay,
  side,
}: {
  label: string;
  Icon: typeof Factory;
  delay: number;
  side: "left" | "right";
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={`flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift ${
          side === "left" ? "lg:flex-row-reverse lg:text-right" : ""
        }`}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
          <Icon className="size-4" />
        </span>
        <p className="flex-1 font-display text-sm font-bold text-navy">{label}</p>
      </div>
    </Reveal>
  );
}
