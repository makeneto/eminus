interface FrameHeaderProps {
  title: string
  children: React.ReactNode
}

export default function FrameHeader({ title, children }: FrameHeaderProps) {
  return (
    <header className="frame--header">
      <h1>{title}</h1>
      {children}
    </header>
  )
}
