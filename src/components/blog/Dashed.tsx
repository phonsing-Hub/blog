"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export function Dashed() {
  return (
    <GridPattern
      width={50}
      height={50}
      x={-1}
      y={-1}
      strokeDasharray={"6 8"}
      className={cn(
        "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
      )}
    />
  );
}
