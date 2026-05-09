import { transactionsData } from "@/constants/transactionsData"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import TransactionTable from "../ui/TransactionTable"
import SelectFilter from "../ui/SelectFilter"

export default function RecentTransactionTable() {
  return (
    <Frame>
      <div className="transaction-table h-80 flex flex-col">
        <FrameHeader title="Recent Transactions">
          <SelectFilter
            group={["This Month", "Last Month", "February", "January"]}
          />
        </FrameHeader>

        <TransactionTable transactions={transactionsData} />
      </div>
    </Frame>
  )
}
