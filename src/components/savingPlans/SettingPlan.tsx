import { useMemo } from "react"
import { Plane } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"
import CardControls from "../cardSection/CardControls"
import { formatDate } from "@/utils/formatDate"
import type { Plan } from "@/constants/plansData"

interface SettingPlanProps {
  plan: Plan
}

export default function SettingPlan({ plan }: SettingPlanProps) {
  const { title, saving, target, deadline } = plan

  const percentage = useMemo(
    () => Math.round((saving / target) * 100),
    [saving, target],
  )

  const remainingDays = useMemo(
    () =>
      Math.ceil(
        (new Date(deadline).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    [deadline],
  )

  const formattedDeadline = useMemo(() => formatDate(deadline), [deadline])

  return (
    <div className="plans__setting">
      <div className="flex items-center gap-3.5 mb-7.5">
        <div className="p-2.5 rounded-full bg-white">
          <Plane size={17} />
        </div>
        <h2 className="text-[1rem] font-medium">{title}</h2>
      </div>

      <div className="grid gap-4 border-b border-b-zinc-300 pb-5">
        <div className="flex items-end gap-1">
          <p className="text-xl font-bold">{saving.toLocaleString()} kz </p>
          <span className="text-muted-foreground text-sm pb-0.5">
            / {target.toLocaleString()} kz
          </span>
        </div>

        <ProgressBar value={percentage} size="lg" />

        <div className="flex items-center justify-between">
          <p className="font-medium text-[0.9rem]">
            {percentage < 100 ? "In Process" : "Completed"}
          </p>
          <p className="font-medium">{percentage}%</p>
        </div>
      </div>

      <div className="pt-5 flex-col justify-between items-center">
        <div className="grid gap-2 items-center justify-between">
          <div className="flex items-center plans__setting--list">
            <p className="font-medium text-[.78rem] text-muted-foreground">
              Due Date
            </p>
            <p className="font-medium text-[.78rem]">{formattedDeadline}</p>
          </div>
          <div className="flex items-center plans__setting--list">
            <p className="font-medium text-[.78rem] text-muted-foreground">
              Remaining
            </p>
            <p className="font-medium text-[.78rem]">{remainingDays} days</p>
          </div>

          <div className="flex items-center plans__setting--list">
            <p className="font-medium text-[.78rem] text-muted-foreground">
              Status
            </p>
            <p className="font-medium text-[.78rem]">
              {percentage < 100 ? "In Process" : "Completed"}
            </p>
          </div>
        </div>

        <CardControls type="plans" className="mt-5" />
      </div>
    </div>
  )
}
