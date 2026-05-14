import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"
import GrowthIndicator from "../ui/GrowthIndicator"

interface SummaryCardProps {
  icon: React.ReactNode
  percent?: number
  amount?: number
  title: string
  variant?: "default" | "transactions"
}

export default function SummaryCard({
  icon,
  percent,
  amount,
  title,
  variant = "default",
}: SummaryCardProps) {
  return (
    <Frame className="dashboard__summary--card">
      {variant === "default" ? (
        <div className="flex justify-between items-center">
          <div className="dashboard__summary--icon">{icon}</div>
          <SettingButton />
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-3">
            <div className="dashboard__summary--icon">{icon}</div>
            <p className="text-[.9rem] font-medium">{title}</p>
          </div>
        </div>
      )}

      {variant === "default" ? (
        <div className="grid gap-2">
          {percent !== undefined ? <GrowthIndicator percent={percent} /> : null}

          {amount !== undefined ? (
            <h1 className="font-bold text-sm">{amount.toLocaleString()} kz</h1>
          ) : null}

          <p className="text-xs text-gray-500">{title}</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {amount !== undefined ? (
            <h1 className="font-bold text-xl">{amount.toLocaleString()} kz</h1>
          ) : null}

          <div className="flex items-center gap-1.5">
            {percent !== undefined ? (
              <GrowthIndicator percent={percent} />
            ) : null}
            <p className="text-sm text-muted-foreground">
              compared to last month
            </p>
          </div>
        </div>
      )}
    </Frame>
  )
}
