import * as React from "react"

type DivProps = React.HTMLAttributes<HTMLDivElement>
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type ParaProps = React.HTMLAttributes<HTMLParagraphElement>

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}
      {...props}
    />
  )
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={`p-5 pb-0 ${className}`} {...props} />
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-5 ${className}`} {...props} />
}

export function CardFooter({ className = "", ...props }: DivProps) {
  return <div className={`p-5 pt-0 ${className}`} {...props} />
}

export function CardTitle({ className = "", ...props }: HeadingProps) {
  return <h3 className={`text-lg font-semibold leading-none ${className}`} {...props} />
}

export function CardDescription({ className = "", ...props }: ParaProps) {
  return <p className={`text-sm text-white/70 ${className}`} {...props} />
}
