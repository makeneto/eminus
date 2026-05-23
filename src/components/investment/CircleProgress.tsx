interface CircleProgressProps {
  percent: number
}

export default function CircleProgress({ percent }: CircleProgressProps) {
  const radius = 15
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="circle-progress">
      <svg width="50" height="50" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={radius} className="circle-progress__track" />
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="circle-progress__fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="circle-progress__label">{percent}%</span>
    </div>
  )
}
