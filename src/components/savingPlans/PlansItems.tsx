import { Plus } from "lucide-react"

import SinglePlan from "./SinglePlan"
import { plansData } from "@/constants/plansData"

export default function PlansItems() {
  return (
    <div className="plans__list">
      <ul className="plans__list--items">
        {plansData.map((plan) => (
          <SinglePlan
            key={plan.id}
            title={plan.title}
            saving={plan.saving}
            target={plan.target}
            type="main"
            isActive={plan.id === "plan_01"}
          />
        ))}
      </ul>

      <button className="btn--primary w-full">
        <Plus size={14} /> Add Plan
      </button>
    </div>
  )
}
