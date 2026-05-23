import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import InvestmentsList from "./InvestmentsList"
import InvestmentSummary from "./InvestmentSummary"

export default function ReturnPerCompany() {
  return (
    <Frame className="invest__feats--card">
      <FrameHeader title="Return per company">
        <span className="text-xs text-zinc-500">vs. Invested capital</span>
      </FrameHeader>

      <div className="invest__list">
        <InvestmentsList />
      </div>

      <InvestmentSummary />
    </Frame>
  )
}
