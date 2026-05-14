import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import { Download, Search } from "lucide-react"
import SelectFilter from "../ui/SelectFilter"
import { useSelectTransaction } from "@/hooks/useSelectTransaction"
import TransactionTable from "../ui/TransactionTable"
import { transactionsData } from "@/constants/transactionsData"

export default function TransactionSection() {
  const { selected, handleRowClick, handleDeselectAll } = useSelectTransaction()

  return (
    <Frame>
      <div className="transaction-table h-175 flex flex-col">
        <FrameHeader title="Recent Transactions">
          <div className="flex gap-8 items-center">
            <div className="transactions__searchInput">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search..."
                name="itransaction"
                id="transaction"
                autoComplete="off"
              />
            </div>

            <div className="flex gap-3 items-center">
              <SelectFilter
                group={["All Status", "Completed", "Pending", "Failed"]}
              />
              <SelectFilter
                group={["This Month", "Last Month", "February", "January"]}
              />

              <button
                disabled={!selected}
                className="transactions__fileDownload"
              >
                <Download size={14} />
              </button>
            </div>
          </div>
        </FrameHeader>

        <TransactionTable
          transactions={transactionsData}
          type="full-transaction"
          selected={selected}
          handleRowClick={handleRowClick}
          handleDeselectAll={handleDeselectAll}
        />
      </div>
    </Frame>
  )
}
