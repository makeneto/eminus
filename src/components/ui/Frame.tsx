import React from "react"

interface FrameProps {
  children: React.ReactNode
  className?: string
}

export default function Frame({ children, className }: FrameProps) {
  return <section className={`frame ${className}`}>{children}</section>
}
