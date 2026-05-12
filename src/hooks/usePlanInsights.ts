import { useMemo } from "react"
import {
  getMonthlyContributionNeeded,
  getMonthsRemaining,
  getFastestPlan,
  formatKz,
} from "../utils/planInsights-utils"
import type { SavingPlan } from "@/components/interfaces/savingPlan"

interface UsePlanInsightsParams {
  plans: SavingPlan[]
  selectedPlanId: string
}

export function usePlanInsights({
  plans,
  selectedPlanId,
}: UsePlanInsightsParams) {
  return useMemo(() => {
    const selectedPlan = plans.find((p) => p.id === selectedPlanId)
    const fastest = getFastestPlan(plans)

    return {
      selectedPlanTitle: selectedPlan?.title ?? "Unknown Plan",
      monthlyNeeded: selectedPlan
        ? formatKz(getMonthlyContributionNeeded(selectedPlan))
        : "—",
      fastestPlanTitle: fastest.title,
      fastestMonths: getMonthsRemaining(fastest.deadline),
    }
  }, [plans, selectedPlanId])
}
