import InvestmentsContent from "../investment/InvestmentsContent"
import InvestmentsHeader from "../investment/InvestmentsHeader"

export default function InvestmentLayout() {
  return (
    <main className="invest">
      <InvestmentsHeader />
      <InvestmentsContent />
    </main>
  )
}
