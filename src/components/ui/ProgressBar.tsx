interface ProgressBarProps {
  value: number
  size?: "sm" | "lg"
}

export default function ProgressBar({ value, size = "sm" }: ProgressBarProps) {
  return (
    <div
      className={`progressBar ${size === "lg" ? "progressBar--lg" : "progressBar--sm"}`}
    >
      <div style={{ width: `${value}%` }}></div>
    </div>
  )
}
