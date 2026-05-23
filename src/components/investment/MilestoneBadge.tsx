export type MilestoneStatus = "Completed" | "In Process"

interface MilestoneBadgeProps {
  status: MilestoneStatus
}

export default function MilestoneBadge({ status }: MilestoneBadgeProps) {
  const modifier = status === "Completed" ? "completed" : "in-process"

  return (
    <span className={`milestone-badge milestone-badge--${modifier}`}>
      {status}
    </span>
  )
}
