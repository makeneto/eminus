import CheckIcon from "./CheckIcon"
import CircleProgress from "./CircleProgress"
import MilestoneBadge, { type MilestoneStatus } from "./MilestoneBadge"

export interface MilestoneItemProps {
  label: string
  amount: number
  status: MilestoneStatus
  completedDate?: string
  remaining?: number
  percent?: number
}

export default function MilestoneItem({
  label,
  amount,
  status,
  completedDate,
  remaining,
  percent,
}: MilestoneItemProps) {
  return (
    <div className="milestone-item">
      <div
        className={`milestone-item__card milestone-item__card--${status === "Completed" ? "completed" : "in-process"}`}
      >
        <div className="flex gap-2.5 items-center">
          <div className="milestone-item__icon">
            {status === "Completed" ? (
              <CheckIcon />
            ) : (
              <CircleProgress percent={percent ?? 0} />
            )}
          </div>
          <div className="milestone-item__info">
            <p className="milestone-item__title text-xs">
              {label} – {amount.toLocaleString()} kz
            </p>
            {status === "Completed" && completedDate && (
              <p className="milestone-item__subtitle">
                Completed on {completedDate}
              </p>
            )}
            {status === "In Process" && remaining !== undefined && (
              <p className="milestone-item__subtitle">
                {remaining.toLocaleString()} kz remaining
              </p>
            )}
          </div>
        </div>

        <MilestoneBadge status={status} />
      </div>
    </div>
  )
}
