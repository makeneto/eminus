import React from "react"

interface FrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  active?: boolean
}

export default function Frame({ children, className, ...props }: FrameProps) {
  return (
    <section className={`frame ${className}`} {...props}>
      {children}
    </section>
  )
}
