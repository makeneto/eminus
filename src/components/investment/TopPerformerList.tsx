import { companies } from "@/constants/companies"
import TopPerformerCompany from "./TopPerformerCompany"

export default function TopPerformerList() {
  return (
    <ul className="invest__topPerformer mt-2">
      {companies.map((company, index) => (
        <TopPerformerCompany company={company} index={index} />
      ))}
    </ul>
  )
}
