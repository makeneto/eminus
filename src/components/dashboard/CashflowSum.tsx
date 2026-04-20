import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectYear from "../ui/SelectYear"
import { ChartBarStacked } from "./CashflowChart"

export default function DashCashFlow() {
  return (
    <Frame>
      <FrameHeader title="Cashflow">
        <SelectYear />
      </FrameHeader>
      <ChartBarStacked />
    </Frame>
  )
}
