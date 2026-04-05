interface ProgressBarProps {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progressBar">
      <div style={{ width: `${value}%` }}></div>
    </div>
  )
}
