import { useState, useMemo } from "react"
import Frame from "../ui/Frame"
import PlansList from "../savingPlans/PlansList"
import SavingTips from "../savingPlans/SavingTips"
import SettingPlan from "../savingPlans/SettingPlan"
import TransactionsPlans from "../savingPlans/TransactionsPlans"
import PlansRanking from "../savingPlans/PlansRanking"
import { plansData } from "@/constants/plansData"

export default function PlansMain() {
  const [selectedPlanId, setSelectedPlanId] = useState("plan_01")
  const selectedPlan = useMemo(
    () => plansData.find((plan) => plan.id === selectedPlanId) ?? plansData[0],
    [selectedPlanId],
  )

  return (
    <div className="plans__main">
      <PlansList
        selectedPlanId={selectedPlanId}
        onSelectPlan={setSelectedPlanId}
      />

      <Frame className="plans__resume">
        <div className="plans__resume-content">
          <SettingPlan plan={selectedPlan} />
          <PlansRanking />
          <SavingTips />
        </div>

        <TransactionsPlans />
      </Frame>
    </div>
  )
}
