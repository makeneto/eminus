import { Goal, Hourglass, Layers, Wallet } from "lucide-react"
import PlansHeaderCard from "../savingPlans/PlansHeaderCard"

export default function PlansHeader() {
  return (
    <header className="plans__header">
      <PlansHeaderCard
        title="Total Savings"
        value={130000}
        icon={<Wallet />}
        percent={15}
      />
      <PlansHeaderCard
        title="Total Target"
        value={200000}
        icon={<Goal />}
        percent={15}
      />
      <PlansHeaderCard
        title="Remaining Amount"
        value={200000 - 130000}
        icon={<Hourglass />}
        percent={-10}
      />
      <PlansHeaderCard
        title="Total Plans"
        value={12}
        icon={<Layers />}
        type="count"
      />
    </header>
  )
}
