import { TrendingUp, TrendingDown } from "lucide-react"
import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"

interface SummaryCardProps {
  type: "income" | "expense" | "balance" | "days"
  icon: React.ReactNode
  percent?: number
  amount?: number
  days?: number
  title: string
}

export default function SummaryCard({
  type,
  icon,
  percent,
  amount,
  days,
  title,
}: SummaryCardProps) {
  return (
    <Frame className="dashboard__summary--card">
      <div className="flex justify-between items-center">
        <div className="dashboard__summary--icon">{icon}</div>
        <SettingButton />
      </div>

      <div className="grid gap-2">
        {percent !== undefined ? (
          <div
            className="badge badge--sm"
            style={{
              backgroundColor: percent >= 0 ? "#a4ed90c3" : "#fea8a8",
              color: percent >= 0 ? "#023535" : "#800000",
            }}
          >
            <span className="flex items-center gap-1.5 font-semibold">
              {percent >= 0 ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              {percent}%
            </span>
          </div>
        ) : null}

        {amount !== undefined ? (
          <h1 className="font-bold">{amount.toLocaleString()} kz</h1>
        ) : null}
        {days !== undefined ? (
          <p className="text-lg font-bold">{days} days</p>
        ) : null}

        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </Frame>
  )
}
