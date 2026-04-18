import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectYear from "../ui/SelectYear"

export default function DashCashFlow() {
  return (
    <Frame>
      <FrameHeader title="Cashflow">
        <SelectYear />
      </FrameHeader>
    </Frame>
  )
}
