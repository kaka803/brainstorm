"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  target = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();
            const startVal = 0;
            const endVal = parseFloat(target);

            const update = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out exponential/cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = startVal + (endVal - startVal) * easeOut;

              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setCount(endVal);
              }
            };

            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  const formattedValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className={`inline-block tabular-nums font-extrabold ${className}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

