import { TrendingDown, TrendingUp } from "lucide-react"

export default function GrowthIndicator({ percent }: { percent: number }) {
  return (
    <div
      className="badge badge--sm"
      style={{
        backgroundColor: percent >= 0 ? "#a4ed90c3" : "#fcc0c0",
        color: percent >= 0 ? "#023535" : "#ce2020",
      }}
    >
      <span className="flex items-center gap-1.5 font-semibold text-[0.65rem]">
        {percent >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {percent}%
      </span>
    </div>
  )
}
