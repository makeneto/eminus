import { ArrowUpRight } from "lucide-react"

import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SinglePlan from "./SinglePlan"
import { Button } from "../ui/button"

export default function SavingPlans() {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <Button variant="ghost" size="icon-xs">
          <ArrowUpRight />
        </Button>
      </FrameHeader>

      <div className="grid gap-1">
        <p className="text-xs text-gray-500">Total Saving</p>
        <h2 className="font-bold">1 250 000 Kz</h2>
      </div>

      <SinglePlan title="Vacation Fund" saving={98000} target={250000} />
      <SinglePlan title="Emergency Fund" saving={50000} target={100000} />
      <SinglePlan title="Home Down Payment" saving={200000} target={500000} />
    </Frame>
  )
}
