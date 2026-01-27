import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/10 text-white",
        secondary: "border-white/10 bg-white/[0.06] text-zinc-200",
        outline: "border-white/15 bg-transparent text-zinc-200",
        destructive: "border-red-500/30 bg-red-500/15 text-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}



