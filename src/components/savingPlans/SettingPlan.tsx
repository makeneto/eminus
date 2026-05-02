import { BanknoteArrowUp, Plane } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"

export default function SettingPlan() {
  return (
    <div className="plans__setting">
      <div className="flex items-center gap-3.5 mb-7.5">
        <div className="p-2.5 rounded-full bg-white">
          <Plane size={17} />
        </div>
        <h2 className="text-[1rem] font-medium">Vacation Fund</h2>
      </div>

      <div className="grid gap-4 border-b border-b-zinc-300 pb-5">
        <div className="flex items-end gap-1">
          <p className="text-xl font-bold">98 000 kz </p>
          <span className="text-muted-foreground text-sm pb-0.5">
            / 250 000 kz
          </span>
        </div>

        <ProgressBar value={39} size="lg" />

        <div className="flex items-center justify-between">
          <p className="font-medium text-[0.9rem]">In Progress</p>
          <p className="font-medium">39%</p>
        </div>
      </div>

      <div className="pt-5 grid gap-3.5 items-center">
        <div className="flex plans__setting--list">
          <p className="font-medium text-[.78rem] text-muted-foreground">
            Last Transactions
          </p>

          <div className="grid gap-3.5">
            <p className="flex items-center gap-2 font-medium text-[.78rem]">
              <BanknoteArrowUp size={15} />
              24/04/2026
            </p>
            <p className="flex items-center gap-2 font-medium text-[.78rem]">
              <BanknoteArrowUp size={15} /> 26/05/2026
            </p>
            <p className="flex items-center gap-2 font-medium text-[.78rem]">
              <BanknoteArrowUp size={15} /> 28/06/2026
            </p>
          </div>
        </div>

        <div className="flex items-center plans__setting--list">
          <p className="font-medium text-[.78rem] text-muted-foreground">
            Due Date
          </p>
          <p className="font-medium text-[.78rem]">31 December, 2026</p>
        </div>

        <div className="flex items-center plans__setting--list">
          <p className="font-medium text-[.78rem] text-muted-foreground">
            Remaining
          </p>
          <p className="font-medium text-[.78rem]">95 days</p>
        </div>
      </div>
    </div>
  )
}
