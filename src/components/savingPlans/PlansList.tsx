import { Plus } from "lucide-react"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import SinglePlan from "./SinglePlan"
import PlanInsights from "./PlanInsights"

export default function PlansList() {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <SelectFilter group={["All", "Active", "Completed"]} />
      </FrameHeader>

      <div className="plans__list">
        <div className="plans__list--items">
          <SinglePlan
            title="Vacation Fund"
            saving={98000}
            target={250000}
            type="main"
            isActive={true}
          />
          <SinglePlan
            title="Emergency Fund"
            saving={50000}
            target={100000}
            type="main"
            isActive={false}
          />
          <SinglePlan
            title="Home Down Payment"
            saving={200000}
            target={500000}
            type="main"
            isActive={false}
          />
        </div>

        <button className="btn--primary w-full">
          <Plus size={14} /> Add Plan
        </button>
      </div>

      <PlanInsights />
    </Frame>
  )
}
