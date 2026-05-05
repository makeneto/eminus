import type { TransactionProps } from "@/interface/transaction"

export default function TransactionTable({
  transactions,
  type,
}: {
  transactions: TransactionProps[]
  type?: "saving"
}) {
  return (
    <div className="table-wrapper no-scroll-bar flex-1 overflow-auto">
      <table>
        <thead>
          <tr>
            <th>Transaction Name</th>
            <th>Date & Time</th>
            <th>Amount</th>
            {type === "saving" ? <th>Saving</th> : <th>Note</th>}
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.name}>
              <td className="name">
                <p>{t.name}</p>
                <p>{t.category}</p>
              </td>

              <td className="date">
                <p>{t.date}</p>
                <p>{t.time}</p>
              </td>

              <td className="amount">{t.amount.toLocaleString()} kz</td>

              {type === "saving" ? (
                <td className="saving">Vacation Fund</td>
              ) : (
                <td className="note">{t.note}</td>
              )}

              <td className={`status ${t.status.toLowerCase()}`}>
                <span>{t.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
