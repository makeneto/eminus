import { CalendarClock, Trophy } from "lucide-react"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import ActivePlan from "../ui/ActivePlan"
import { plansData } from "@/constants/plansData"
import { usePlanInsights } from "@/hooks/usePlanInsights"

interface PlanInsightsProps {
  selectedPlanId: string
}

export default function PlanInsights({ selectedPlanId }: PlanInsightsProps) {
  const { selectedPlanTitle, monthlyNeeded, fastestPlanTitle, fastestMonths } =
    usePlanInsights({ plans: plansData, selectedPlanId })

  return (
    <Frame className="plans__insights">
      <FrameHeader title="Plan Insights">
        <ActivePlan title={selectedPlanTitle} />
      </FrameHeader>

      <div className="grid">
        {/* Monthly contribution needed */}
        <div className="flex items-center gap-4 pt-2 pb-5 border-b">
          <div className="bg-[#fef9c3] p-2.5 rounded-full shrink-0">
            <CalendarClock size={19} className="text-[#ca8a04]" />
          </div>
          <div>
            <p className="text-xs text-gray-600">Monthly contribution needed</p>
            <h2 className="font-semibold">
              {monthlyNeeded}
              <span className="font-normal text-xs"> / month</span>
            </h2>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              across{" "}
              <strong className="font-semibold">{selectedPlanTitle}</strong>{" "}
              plan
            </p>
          </div>
        </div>

        {/* Fastest to complete */}
        <div className="flex items-center gap-4 pt-5 pb-4">
          <div className="bg-[#dcfce7] p-2.5 rounded-full shrink-0">
            <Trophy size={19} className="text-[#16a34a]" />
          </div>
          <div>
            <p className="text-xs text-gray-600">Fastest to complete</p>
            <h2 className="font-semibold">{fastestPlanTitle}</h2>
            <p className="text-xs text-gray-600">
              ~ {fastestMonths} month{fastestMonths !== 1 ? "s" : ""} at current
              pace
            </p>
          </div>
        </div>
      </div>
    </Frame>
  )
}
