import CardSection from "../cardSection/CardSection"
import AsideTransaction from "../transactions/AsideTransaction"
import DashCashFlow from "../dashboard/CashflowSection"
import DashSummary from "../dashboard/DashSummary"
import RecentTransactionTable from "../dashboard/RecentTransactionTable"

export default function DashboardLayout() {
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

      <AsideTransaction recentTransactions={12.5} />
    </main>
  )
}
