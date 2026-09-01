import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  asChild = false,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  asChild?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
}
