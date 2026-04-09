import CardSection from "../cardSection/CardSection"
import DashSummary from "../dashboard/DashSummary"

export default function DashBoardLayout() {
  return (
    <main className="dashLayout">
      <CardSection />
      <main className="dashLayout__content">
        <DashSummary />
      </main>
    </main>
  )
}
