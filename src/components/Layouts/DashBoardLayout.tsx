import CardSection from "../cardSection/CardSection"
import AsideTransaction from "../dashboard/AsideTransaction"
import DashCashFlow from "../dashboard/CashflowSum"
import DashSummary from "../dashboard/DashSummary"
import RecentTransactionTable from "../dashboard/RecentTransactionTable"

export default function DashBoardLayout() {
  return (
    <main className="dashLayout">
      <CardSection />
      <main className="dashLayout__content">
        <DashSummary />
        <div className="main-grid">
          <DashCashFlow />
          <RecentTransactionTable />
        </div>
      </main>
      <AsideTransaction />
    </main>
  )
}
