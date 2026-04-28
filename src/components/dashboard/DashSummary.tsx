import { BanknoteArrowDown, BanknoteArrowUp, Landmark } from "lucide-react"
import SummaryCard from "./SummaryCard"

export default function DashSummary() {
  return (
    <section className="dashboard__summary">
      {/* Rendimentos dos últimos 30 dias */}
      <SummaryCard
        icon={<BanknoteArrowUp size={19} />}
        percent={1.78}
        amount={117000}
        title="Total income"
      />

      {/* Gastos dos últimos 30 dias */}
      <SummaryCard
        icon={<BanknoteArrowDown size={19} />}
        percent={-1.78}
        amount={117000}
        title="Total expenses"
      />

      {/* Saldo positivo dos últimos 30 dias */}
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={254360}
        title="Credit balance"
      />

      {/* Taxa de poupança dos últimos 30 dias */}
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={846638}
        title="Savings rate"
      />

      {/* Quanto ganhas por dia real */}
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={14500}
        title="Income daily"
      />

      {/* Quanto os teus gastos aumentaram à medida que o rendimento subiu */}
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={360000}
        title="Lifestyle Creep"
      />
    </section>
  )
}
