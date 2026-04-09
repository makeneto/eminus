import { Plus } from "lucide-react"

import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SinglePlan from "./SinglePlan"

export default function SavingPlans() {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <button className="btn--primary">
          <Plus /> Add Plan
        </button>
      </FrameHeader>

      <div className="grid gap-1">
        <p className="text-xs text-gray-500">Total Saving</p>
        <h2 className="font-bold">1 250 000 Kz</h2>
      </div>

      <SinglePlan />
    </Frame>
  )
}
