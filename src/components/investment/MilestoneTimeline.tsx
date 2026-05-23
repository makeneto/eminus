import MilestoneItem, { type MilestoneItemProps } from "./MilestoneItem"

interface MilestoneTimelineProps {
  milestones: MilestoneItemProps[]
}

export default function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  return (
    <div className="milestone-timeline">
      <div className="milestone-timeline__line" />
      {milestones.map((milestone) => (
        <MilestoneItem key={milestone.label} {...milestone} />
      ))}
    </div>
  )
}
