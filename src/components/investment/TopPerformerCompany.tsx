import type { CompanyProps } from "@/constants/companies"

interface TopPerformerProps {
  company: CompanyProps
  index: number
}

export default function TopPerformerCompany({
  company,
  index,
}: TopPerformerProps) {
  const { logo, name, industry, currentBalance, percent } = company
  const emoji = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"

  return (
    <li className="invest__topPerformer--topCompany">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <p className="text-2xl">{emoji}</p>

          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-9 h-9 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground">{industry}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-end">
            {currentBalance.toLocaleString()} kz
          </p>
          <p
            className={`text-xs text-end ${percent > 0 ? "text-[#16a34a]" : "text-[#dc2626]"}`}
          >
            {percent > 0 ? "+" : "-"}
            {percent}%
          </p>
        </div>
      </div>
    </li>
  )
}
