import ProgressBar from "../ui/ProgressBar"
import type { CompanyCardProps } from "./CompanyCard"

export default function InvestmentItem({ company }: CompanyCardProps) {
  const { name, currentBalance, investedBalance, percent } = company

  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm">{name}</h1>
        <span className="text-sm font-medium text-[#16a34a]">
          {percent > 0 ? "+" : "-"}
          {percent}
        </span>
      </div>

      <ProgressBar value={55} />

      <div className="flex items-center justify-between">
        <p className="text-xs font-medium">
          Invested: {investedBalance.toLocaleString()} kz
        </p>
        <p className="text-xs font-medium text-muted-foreground">
          Current: {currentBalance.toLocaleString()} kz
        </p>
      </div>
    </div>
  )
}
