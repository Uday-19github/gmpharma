import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setDisplay(0);
  }, []);

  useEffect(() => {
    if (!animate || !inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, inView, value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-7 text-center backdrop-blur-sm"
    >
      <p className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">
        <span aria-hidden="true">
          {display}
          {suffix}
        </span>
        <span className="sr-only">
          {value}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-primary-foreground/85 sm:text-base">
        {label}
      </p>
    </div>
  );
}
