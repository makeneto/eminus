import { CalendarClock, Trophy } from "lucide-react"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"

export default function PlanInsights() {
  return (
    <Frame className="plans__insights">
      <FrameHeader title="Plan Insights" />

      <div className="grid gap-4">
        <div className="flex items-center gap-4 py-4 border-b">
          <div className="bg-[#fef9c3] p-2.5 rounded-full">
            <CalendarClock size={19} className="text-[#ca8a04]" />
          </div>
          <div>
            <p className="text-xs text-gray-600">Monthly contribution needed</p>
            <h2 className="font-semibold">
              18 750 kz <span className="font-normal text-xs"> / month</span>
            </h2>
            <span className="text-xs text-gray-600 flex items-center gap-1">
              across <h1 className="font-semibold">Vacation Fund</h1> plan
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <div className="bg-[#dcfce7] p-2.5 rounded-full">
            <Trophy size={19} className="text-[#16a34a]" />
          </div>
          <div>
            <p className="text-xs text-gray-600">Fastest to complete</p>
            <h2 className="font-semibold">Emergency Fund</h2>
            <p className="text-xs text-gray-600">~ 3 months at current pace</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}
