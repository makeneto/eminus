import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectTime from "../ui/SelectTime"
import { ChartBarStacked } from "./CashflowChart"

export default function DashCashFlow() {
  return (
    <Frame>
      <div className="h-[20rem]">
        <FrameHeader title="Cashflow">
          <SelectTime group={["This Year", "Last Year", "2024", "2023"]} />
        </FrameHeader>
        <ChartBarStacked />
      </div>
    </Frame>
  )
}
