import { useCallback } from "react"
import { Plus } from "lucide-react"

import SinglePlan from "./SinglePlan"
import { plansData } from "@/constants/plansData"

interface PlansItemsProps {
  selectedPlanId: string
  onSelectPlan: (id: string) => void
}

export default function PlansItems({
  selectedPlanId,
  onSelectPlan,
}: PlansItemsProps) {
  const handlePlanClick = useCallback(
    (planId: string) => {
      onSelectPlan(planId)
    },
    [onSelectPlan],
  )

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
            isActive={plan.id === selectedPlanId}
            active={plan.id === selectedPlanId}
            onClick={() => handlePlanClick(plan.id)}
          />
        ))}
      </ul>

      <button className="btn--primary w-full">
        <Plus size={14} /> Add Plan
      </button>
    </div>
  )
}
