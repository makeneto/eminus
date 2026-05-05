import { transactionsData } from "@/constants/transactionsData"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectTime from "../ui/SelectFilter"
import TransactionTable from "../ui/TransactionTable"

export default function RecentTransactionTable() {
  return (
    <Frame>
      <div className="transaction-table h-[20rem] flex flex-col">
        <FrameHeader title="Recent Transactions">
          <SelectTime
            group={["This Month", "Last Month", "February", "January"]}
          />
        </FrameHeader>

        <TransactionTable transactions={transactionsData} />
      </div>
    </Frame>
  )
}
