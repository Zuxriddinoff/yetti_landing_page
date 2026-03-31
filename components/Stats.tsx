"use client";

import { useI18n } from "@/components/LanguageProvider";
import { useEffect, useMemo, useRef, useState } from "react";

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const duration = 1400;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  start,
}: {
  label: string;
  value: number;
  suffix: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);
  const displayValue = useMemo(() => `${count}${suffix}`, [count, suffix]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
      <span className="animate-[counter-up_0.7s_ease_forwards] text-5xl font-bold text-slate-950 sm:text-[56px]">
        {displayValue}
      </span>
      <span className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500">{label}</span>
    </div>
  );
}

export function Stats() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label={t.stats.aria} className="section-divider">
      <div className="section-shell">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {t.stats.items.map((stat) => (
            <StatItem key={stat.label} {...stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
