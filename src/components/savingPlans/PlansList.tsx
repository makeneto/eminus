import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import PlanInsights from "./PlanInsights"
import PlansItems from "./PlansItems"

export default function PlansList() {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <SelectFilter group={["All", "Active", "Completed"]} />
      </FrameHeader>

      <PlansItems />
      <PlanInsights />
    </Frame>
  )
}
