import { transactionsData } from "@/constants/transactionsData"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import TransactionTable from "../ui/TransactionTable"

export default function TransactionsPlans() {
  return (
    <Frame className="transaction-table h-68 flex flex-col">
      <FrameHeader title="Transactions">
        <SelectFilter
          group={["This Month", "Last Month", "February", "January"]}
        />
      </FrameHeader>
      <TransactionTable transactions={transactionsData} type="saving" />
    </Frame>
  )
}
