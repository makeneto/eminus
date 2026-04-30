import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"

export default function TransactionsPlans() {
  return (
    <Frame className="plans__transactions">
      <FrameHeader title="Transactions">
        <SelectFilter group={["This Month", "Last Month"]} />
      </FrameHeader>
    </Frame>
  )
}
