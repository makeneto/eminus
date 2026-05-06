import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import PlanInsights from "./PlanInsights"
import PlansItems from "./PlansItems"

interface PlansListProps {
  selectedPlanId: string
  onSelectPlan: (id: string) => void
}

export default function PlansList({
  selectedPlanId,
  onSelectPlan,
}: PlansListProps) {
  return (
    <Frame>
      <FrameHeader title="Saving Plans">
        <SelectFilter group={["All", "Active", "Completed"]} />
      </FrameHeader>

      <PlansItems selectedPlanId={selectedPlanId} onSelectPlan={onSelectPlan} />
      <PlanInsights selectedPlanId={selectedPlanId} />
    </Frame>
  )
}
