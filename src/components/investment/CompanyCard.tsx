import { TrendingUp, EllipsisVertical } from "lucide-react"

import { Button } from "../ui/button"

export interface CompanyProps {
  id: string
  logo: string
  name: string
  currentBalance: number
  investedBalance: number
  qtd: number
  percent: number
  percentValue: number
}

export interface CompanyCardProps {
  company: CompanyProps
}

export function CompanyCard({ company }: CompanyCardProps) {
  const { logo, name, currentBalance, percent, percentValue, qtd } = company

  const isPositive = percent >= 0

  return (
    <li className="invest__companies__item">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="invest__companies__item--logo">
            <img src={logo} alt={name} />
          </div>
          <p className="text-sm font-medium">{name}</p>
        </div>

        <Button variant="ghost" size="xs">
          <EllipsisVertical size={14} />
        </Button>
      </header>

      <div className="grid gap-2">
        <h2 className="text-lg font-bold">
          {currentBalance.toLocaleString()} <span className="currency">kz</span>
        </h2>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-[#16a34a]">
            <span className="flex items-center gap-1">
              <TrendingUp size={15} />
              {isPositive ? "+" : "-"}
              {percent}%
            </span>
            <span>({percentValue.toLocaleString()} kz)</span>
          </div>

          <p>
            <span className="text-muted-foreground">Quantity:</span>{" "}
            <span className="font-semibold">{qtd}</span>
          </p>
        </div>
      </div>
    </li>
  )
}
