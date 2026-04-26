import { BanknoteArrowDown, BanknoteArrowUp, Landmark } from "lucide-react"
import SummaryCard from "./SummaryCard"

export default function DashSummary() {
  return (
    <section className="dashboard__summary">
      <SummaryCard
        icon={<BanknoteArrowUp size={19} />}
        percent={1.78}
        amount={117000}
        title="Total Income"
      />
      <SummaryCard
        icon={<BanknoteArrowDown size={19} />}
        percent={-1.78}
        amount={117000}
        title="Total Expenses"
      />
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={180000}
        title="Saldo Positivo"
      />
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={180000}
        title="Saldo Positivo"
      />
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={180000}
        title="Saldo Positivo"
      />
      <SummaryCard
        icon={<Landmark size={19} />}
        percent={18}
        amount={180000}
        title="Saldo Positivo"
      />
    </section>
  )
}
