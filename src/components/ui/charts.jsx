"use client";

import { ResponsiveContainer } from "recharts";

export function ChartContainer({ children, className, ...props }) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height={350}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}

export function ChartTooltipContent({ active, payload, label }) {
  if (!active || !payload) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            {label}
          </span>
          <span className="font-bold text-foreground">
            ₹{payload[0]?.value?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
