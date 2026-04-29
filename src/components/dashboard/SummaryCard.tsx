import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"
import GrowthIndicator from "../ui/GrowthIndicator"

interface SummaryCardProps {
  icon: React.ReactNode
  percent?: number
  amount?: number
  title: string
}

export default function SummaryCard({
  icon,
  percent,
  amount,
  title,
}: SummaryCardProps) {
  return (
    <Frame className="dashboard__summary--card">
      <div className="flex justify-between items-center">
        <div className="dashboard__summary--icon">{icon}</div>
        <SettingButton />
      </div>

      <div className="grid gap-2">
        {percent !== undefined ? <GrowthIndicator percent={percent} /> : null}

        {amount !== undefined ? (
          <h1 className="font-bold text-sm">{amount.toLocaleString()} kz</h1>
        ) : null}

        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </Frame>
  )
}
