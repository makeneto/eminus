import { ChartLineDefault } from "../ui/ChartLineDefault"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"

export default function SavingBalance() {
  return (
    <Frame className="plans__feats--chart">
      <FrameHeader title="Balance">
        <SelectFilter group={["This Year", "Last Year", "2024"]} />
      </FrameHeader>

      <ChartLineDefault />
    </Frame>
  )
}
