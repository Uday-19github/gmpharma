import {
  Atom,
  Beaker,
  ClipboardList,
  Factory,
  FlaskConical,
  Globe,
  Leaf,
  Lightbulb,
  Microscope,
  Pill,
  Sparkles,
  TestTubes,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry keyed by the string identifiers stored in
 * src/data/company.ts. Keeps icon lookups consistent everywhere a
 * data-driven icon key (service.icon, whyChooseUs[].icon, ...) needs
 * to resolve to a real lucide-react component.
 */
export const iconMap: Record<string, LucideIcon> = {
  factory: Factory,
  flask: Beaker,
  flaskConical: FlaskConical,
  microscope: Microscope,
  pill: Pill,
  leaf: Leaf,
  globe: Globe,
  lightbulb: Lightbulb,
  atom: Atom,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  testTubes: TestTubes,
};

export function resolveIcon(key: string): LucideIcon {
  return iconMap[key] ?? Factory;
}
