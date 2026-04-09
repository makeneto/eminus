import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  Calendar,
  Landmark,
} from "lucide-react"
import SummaryCard from "./SummaryCard"

export default function DashSummary() {
  return (
    <section className="dashboard__summary">
      <SummaryCard
        type="income"
        icon={<BanknoteArrowUp size={19} />}
        percent={1.78}
        amount={117000}
        title="Total Income"
      />
      <SummaryCard
        type="expense"
        icon={<BanknoteArrowDown size={19} />}
        percent={-1.78}
        amount={117000}
        title="Total Expenses"
      />
      <SummaryCard
        type="balance"
        icon={<Landmark size={19} />}
        percent={18}
        amount={180000}
        title="Saldo Positivo"
      />
      <SummaryCard
        type="days"
        icon={<Calendar size={19} />}
        days={14}
        title="Remaining days"
      />
    </section>
  )
}
