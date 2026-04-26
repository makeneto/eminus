import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectYear from "../ui/SelectYear"

export default function RecentTransactionTable() {
  const transactions = [
    {
      name: "Electricity Bill",
      category: "Rent & Living",
      date: "2026-03-01",
      time: "04:28:48",
      amount: "$295.81",
      note: "Payment for monthly electricity bill",
      status: "Failed",
    },
    {
      name: "Weekly Groceries",
      category: "Food & Drinks",
      date: "2026-03-04",
      time: "04:28:48",
      amount: "$204.07",
      note: "Groceries shopping at local supermarket",
      status: "Completed",
    },
    {
      name: "Movie Night",
      category: "Entertainment",
      date: "2026-02-27",
      time: "04:28:48",
      amount: "$97.84",
      note: "Tickets for movies and snacks",
      status: "Pending",
    },
  ]

  return (
    <Frame>
      <div className="recent-transactions grid gap-5">
        <FrameHeader title="Recent Transactions">
          <SelectYear />
        </FrameHeader>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Transaction Name</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Note</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t.name}>
                  {/* Name */}
                  <td className="name">
                    <p>{t.name}</p>
                    <p>{t.category}</p>
                  </td>

                  {/* Date */}
                  <td className="date">
                    <p>{t.date}</p>
                    <p>{t.time}</p>
                  </td>

                  {/* Amount */}
                  <td className="amount">{t.amount}</td>

                  {/* Note */}
                  <td className="note">{t.note}</td>

                  {/* Status */}
                  <td className={`status ${t.status.toLowerCase()}`}>
                    <span>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Frame>
  )
}
