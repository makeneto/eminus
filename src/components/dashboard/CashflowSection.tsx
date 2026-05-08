import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import { ChartBarStacked } from "./CashflowChart"

export default function CashflowSection() {
  return (
    <Frame>
      <div className="h-80">
        <FrameHeader title="Cashflow">
          <SelectFilter group={["This Year", "Last Year", "2024", "2023"]} />
        </FrameHeader>
        <ChartBarStacked />
      </div>
    </Frame>
  )
}
