"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
};

/** Counts up from 0 to `to` the first time it enters the viewport. */
export default function Counter({ to, suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {Math.round(value).toLocaleString()}
      {suffix}
    </span>
  );
}
