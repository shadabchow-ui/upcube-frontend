import React from "react"

type BadgeVariant = "default" | "secondary" | "outline" | "destructive"

export function Badge({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: BadgeVariant
}) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"

  const styles: Record<BadgeVariant, string> = {
    default: "bg-white/10 text-white",
    secondary: "bg-white/5 text-white/80",
    outline: "border border-white/15 text-white/80",
    destructive: "bg-red-500/15 text-red-200 border border-red-500/30",
  }

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>{children}</span>
  )
}

