import React from "react"
import GrowthIndicator from "../ui/GrowthIndicator"

interface PlansHeaderCardProps {
  title: string
  value: number
  icon: React.ReactNode
  type?: "amount" | "count"
  percent?: number
}

export default function PlansHeaderCard({
  title,
  value,
  icon,
  type = "amount",
  percent,
}: PlansHeaderCardProps) {
  return (
    <div className="plans__header-content">
      <div className="plans__header-content-text">
        <p>{title}</p>

        <div className="flex items-center gap-2">
          <h1>
            {type === "amount"
              ? value.toLocaleString()
              : value.toLocaleString()}{" "}
            {type === "amount" ? "kz" : ""}
          </h1>
          {percent !== undefined && <GrowthIndicator percent={percent} />}
        </div>
      </div>
      <div className="plans__header-content-icon">{icon}</div>
    </div>
  )
}
