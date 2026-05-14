import { Wallet } from "lucide-react"
import SummaryCard from "../dashboard/SummaryCard"

export default function TransactionSummary() {
  return (
    <section className="transactions__content--summaryCard">
      <SummaryCard
        icon={<Wallet size={19} />}
        percent={1.78}
        amount={623750}
        title="Total transactions this month"
        variant="transactions"
      />
      <SummaryCard
        icon={<Wallet size={19} />}
        percent={1.78}
        amount={526250}
        title="Total income"
        variant="transactions"
      />
      <SummaryCard
        icon={<Wallet size={19} />}
        percent={1.78}
        amount={97500}
        title="Total expenses"
        variant="transactions"
      />
      <SummaryCard
        icon={<Wallet size={19} />}
        percent={1.78}
        amount={250240}
        title="Saving rate"
        variant="transactions"
      />
    </section>
  )
}
