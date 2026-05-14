import { FileOutput } from "lucide-react"
import AsideTransaction from "../transactions/AsideTransaction"
import TransactionSection from "../transactions/transactionSection"
import TransactionSummary from "../transactions/TransactionSummary"
import { MonthPicker } from "../ui/MonthPicker"

export default function TransactionsLayout() {
  return (
    <main className="transactions">
      <div className="transactions__content">
        <TransactionSummary />
        <TransactionSection />
      </div>

      <div className="transactions__aside">
        <div className="transactions__aside--resumeButtons">
          <MonthPicker
            value={{ month: 1, year: 2025 }} // February 2025
            onChange={(val) => console.log(val)}
          />
          <button>
            <FileOutput size={17} /> Export report
          </button>
        </div>

        <AsideTransaction recentTransactions={9} />
      </div>
    </main>
  )
}
