"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ target, suffix = "", duration, className }: CountUpProps) {
  const value = useCountUp(target, duration);
  return (
    <span className={className}>
      {value}
      {suffix}
    </span>
  );
}
