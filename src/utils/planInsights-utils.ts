import type { SavingPlan } from "@/components/interfaces/SavingPlan"

export function getMonthsRemaining(deadline: string): number {
  const now = new Date()
  const end = new Date(deadline)
  const months =
    (end.getFullYear() - now.getFullYear()) * 12 +
    (end.getMonth() - now.getMonth())
  return Math.max(1, months)
}

export function getMonthlyContributionNeeded(plan: SavingPlan): number {
  const remaining = plan.target - plan.saving
  const months = getMonthsRemaining(plan.deadline)
  return Math.ceil(remaining / months)
}

export function getFastestPlan(plans: SavingPlan[]): SavingPlan {
  return plans.reduce((fastest, current) =>
    getMonthsRemaining(current.deadline) < getMonthsRemaining(fastest.deadline)
      ? current
      : fastest
  )
}

export function formatKz(amount: number): string {
  return amount.toLocaleString("pt-AO") + " kz"
}
