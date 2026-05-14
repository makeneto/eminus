import { FileOutput } from "lucide-react"
import AsideTransaction from "../dashboard/AsideTransaction"
import TransactionSection from "../transactions/transactionSection"
import TransactionSummary from "../transactions/TransactionSummary"

export default function TransactionsLayout() {
  return (
    <main className="transactions">
      <div className="transactions__content">
        <TransactionSummary />
        <TransactionSection />
      </div>

      <div className="transactions__aside">
        <div className="transactions__aside--resumeButtons">
          <button>
            <FileOutput size={17} /> Export report
          </button>
          <button>
            <FileOutput size={17} /> Export report
          </button>
        </div>

        <AsideTransaction recentTransactions={9} />
      </div>
    </main>
  )
}
