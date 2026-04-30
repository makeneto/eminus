import { Plus } from "lucide-react"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import SinglePlan from "./SinglePlan"

export default function PlansList() {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <SelectFilter group={["All", "Active", "Completed"]} />
      </FrameHeader>

      <SinglePlan
        title="Vacation Fund"
        saving={98000}
        target={250000}
        type="main"
      />
      <SinglePlan
        title="Emergency Fund"
        saving={50000}
        target={100000}
        type="main"
      />
      <SinglePlan
        title="Home Down Payment"
        saving={200000}
        target={500000}
        type="main"
      />
      <SinglePlan title="New Car" saving={15000} target={30000} type="main" />
      <SinglePlan
        title="Graduation Trip"
        saving={25000}
        target={50000}
        type="main"
      />

      <button className="btn--primary">
        <Plus size={14} /> Add Plan
      </button>
    </Frame>
  )
}
