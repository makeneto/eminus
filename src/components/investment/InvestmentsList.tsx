import { companies } from "@/constants/companies"
import InvestmentItem from "./InvestmentItem"

export default function InvestmentsList() {
  return (
    <ul className="mt-2 grid gap-6">
      {companies.map((investment) => (
        <InvestmentItem key={investment.id} company={investment} />
      ))}
    </ul>
  )
}
