export type PlanStatus = "in_progress" | "completed" | "at_risk" | "paused"

export type PlanCategory =
  | "travel"
  | "emergency"
  | "real_estate"
  | "education"
  | "vehicle"
  | "retirement"
  | "health"
  | "other"

export interface Transaction {
  id: string
  date: string
  amount: number
  type: "deposit" | "withdraw"
  note: string
  status: "completed" | "failed" | "pending"
}

export interface SavingPlan {
  id: string
  title: string
  description: string
  category: PlanCategory
  saving: number
  target: number
  monthlyContribution: number
  startDate: string
  deadline: string
  status: PlanStatus
  autoDeposit: boolean
  transactions: Transaction[]
  createdAt: string
  updatedAt: string
}
