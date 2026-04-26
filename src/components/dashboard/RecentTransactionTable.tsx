import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectTime from "../ui/SelectTime"

export default function RecentTransactionTable() {
  const transactions = [
    {
      name: "Electricity Bill",
      category: "Rent & Living",
      date: "2026-03-01",
      time: "04:28:48",
      amount: 29581,
      note: "Payment for monthly electricity bill",
      status: "Failed",
    },
    {
      name: "Weekly Groceries",
      category: "Food & Drinks",
      date: "2026-03-04",
      time: "04:28:48",
      amount: 20407,
      note: "Groceries shopping at local supermarket",
      status: "Completed",
    },
    {
      name: "Movie Night",
      category: "Entertainment",
      date: "2026-02-27",
      time: "04:28:48",
      amount: 9784,
      note: "Tickets for movies and snacks",
      status: "Pending",
    },
  ]

  return (
    <Frame>
      <div className="recent-transactions grid gap-5">
        <FrameHeader title="Recent Transactions">
          <SelectTime
            group={["This Month", "Last Month", "February", "January"]}
          />
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
                  <td className="name">
                    <p>{t.name}</p>
                    <p>{t.category}</p>
                  </td>

                  <td className="date">
                    <p>{t.date}</p>
                    <p>{t.time}</p>
                  </td>

                  <td className="amount">{t.amount.toLocaleString()} kz</td>

                  <td className="note">{t.note}</td>

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
