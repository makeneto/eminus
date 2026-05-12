import type { TransactionProps } from "@/components/interfaces/transaction"
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react"
import { Checkbox } from "../ui/checkbox"

interface TransactionTableProps {
  transactions: TransactionProps[]
  type?: "saving" | "full-transaction"

  selected: string | null
  handleRowClick: (id: string) => void
  handleDeselectAll: () => void
}

export default function TransactionTable({
  transactions,
  type,
  selected,
  handleRowClick,
  handleDeselectAll,
}: TransactionTableProps) {
  const isFullTransaction = type === "full-transaction"

  return (
    <div className="table-wrapper no-scroll-bar flex-1 overflow-auto">
      <table>
        <thead>
          <tr>
            {isFullTransaction && (
              <th className="checkbox-cell">
                <Checkbox
                  checked={true}
                  onCheckedChange={handleDeselectAll}
                  variant="minus"
                />
              </th>
            )}

            {isFullTransaction && <th>Transaction ID</th>}

            <th>Transaction Name</th>

            <th>Amount</th>
            <th>Date & Time</th>
            {type === "saving" ? (
              <th>Saving</th>
            ) : (
              !isFullTransaction && <th>Note</th>
            )}

            <th>Status</th>

            {isFullTransaction && <th />}
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id ?? t.name}
              className={selected === t.id ? "selected" : ""}
              onClick={() => isFullTransaction && handleRowClick(t.id)}
              style={isFullTransaction ? { cursor: "pointer" } : undefined}
            >
              {isFullTransaction && (
                <td
                  className="checkbox-cell"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={selected === t.id}
                    onCheckedChange={() => handleRowClick(t.id)}
                  />
                </td>
              )}

              {isFullTransaction && <td className="transaction-id">{t.id}</td>}

              <td className="name flex items-center gap-4">
                {isFullTransaction ? (
                  <span
                    className={`payments__icon ${t.amount >= 0 ? "payments__icon--positive" : "payments__icon--negative"}`}
                  >
                    {t.amount > 0 ? (
                      <BanknoteArrowUp size={18} />
                    ) : (
                      <BanknoteArrowDown size={18} />
                    )}
                  </span>
                ) : null}
                <span className="name flex items-center gap-2">
                  <span>
                    <p>{t.name}</p>
                    <p>{t.category}</p>
                  </span>
                </span>
              </td>

              <td
                className={`amount ${t.amount >= 0 ? "amount--positive" : "amount--negative"}`}
              >
                {t.amount >= 0
                  ? `+${t.amount.toLocaleString()} Kz`
                  : `-${Math.abs(t.amount).toLocaleString()} Kz`}
              </td>

              <td className="date">
                <p>{t.date}</p>
                <p>{t.time}</p>
              </td>

              {!isFullTransaction && type !== "saving" && (
                <td className="note">{t.note}</td>
              )}
              {type === "saving" && <td className="saving">Vacation Fund</td>}

              <td className={`status ${t.status.toLowerCase()}`}>
                <span>{t.status}</span>
              </td>

              {isFullTransaction && (
                <td
                  className="settings-cell"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="settings-btn"
                    onClick={() => console.log("settings for", t.id)}
                    aria-label="Transaction settings"
                  >
                    ⋮
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
