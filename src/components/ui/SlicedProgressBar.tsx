interface SlicedProgressBarProps {
  value: number
  size?: "sm" | "lg"
  className?: string
}

export default function SlicedProgressBar({
  value,
  size = "sm",
  className,
}: SlicedProgressBarProps) {
  return (
    <div
      className={`${className} SlicedProgressBar ${size === "lg" ? "SlicedProgressBar--lg" : "SlicedProgressBar--sm"}`}
      style={{ gridTemplateColumns: `${value}% auto` }}
    >
      <div />
      <div />
    </div>
  )
}
