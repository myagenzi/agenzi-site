"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="animate-ticker flex whitespace-nowrap">
        {children}
        {children}
      </div>
    </div>
  );
}
