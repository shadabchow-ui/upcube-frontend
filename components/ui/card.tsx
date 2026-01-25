import React from 'react'

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-5 pb-0 ${className}`}>{children}</div>
}

export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
