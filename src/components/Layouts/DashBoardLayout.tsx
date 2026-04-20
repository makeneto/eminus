import CardSection from "../cardSection/CardSection"
import DashCashFlow from "../dashboard/CashflowSum"
import DashSummary from "../dashboard/DashSummary"

export default function DashBoardLayout() {
  return (
    <main className="dashLayout">
      <CardSection />
      <main className="dashLayout__content">
        <DashSummary />
        <DashCashFlow />
      </main>
    </main>
  )
}
