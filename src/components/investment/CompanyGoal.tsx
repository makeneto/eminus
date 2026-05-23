import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import ProgressBar from "../ui/ProgressBar"
import SelectFilter from "../ui/SelectFilter"
import type { MilestoneItemProps } from "./MilestoneItem"
import MilestoneTimeline from "./MilestoneTimeline"

const GOAL_AMOUNT = 1_500_000
const START_AMOUNT = 100_000
const INVESTED = 1_350_000

function buildMilestones(
  goalAmount: number,
  invested: number,
): MilestoneItemProps[] {
  const remaining = goalAmount - invested
  const finalPercent = Math.round((invested / goalAmount) * 100)

  return [
    {
      label: "Start",
      amount: START_AMOUNT,
      status: "Completed",
      completedDate: "Jan 15, 2026",
    },
    {
      label: "Halfway",
      amount: goalAmount / 2,
      status: "Completed",
      completedDate: "May 20, 2026",
    },
    {
      label: "Final",
      amount: goalAmount,
      status: "In Process",
      remaining,
      percent: finalPercent,
    },
  ]
}

export default function GoalCompany() {
  const remaining = GOAL_AMOUNT - INVESTED
  const progressPercent = Math.round((INVESTED / GOAL_AMOUNT) * 100)
  const milestones = buildMilestones(GOAL_AMOUNT, INVESTED)

  return (
    <Frame>
      <FrameHeader title="Company Goal">
        <SelectFilter group={["Yango Cars", "Marmitas", "Goldera"]} />
      </FrameHeader>

      <div className="goal-summary">
        <div className="goal-summary__header">
          <div className="goal-summary__company">
            <img
              src="/yango-logo.png"
              alt="Yango Cars logo"
              className="goal-summary__logo"
            />
            <div>
              <p className="goal-summary__amount">
                {GOAL_AMOUNT.toLocaleString()} kz
              </p>
              <p className="goal-summary__name">Yango Cars</p>
            </div>
          </div>
          <div className="goal-summary__status">
            <p className="goal-summary__percent">{progressPercent}%</p>
            <p className="goal-summary__label">In Process</p>
          </div>
        </div>

        <div className="goal-summary__progress">
          <ProgressBar value={progressPercent} />
          <div className="goal-summary__progress-labels">
            <span>{INVESTED.toLocaleString()} kz</span>
            <span>{remaining.toLocaleString()} kz remaining</span>
          </div>
        </div>
      </div>

      <section className="goal-milestones">
        <h2 className="goal-milestones__title">Milestones</h2>
        <MilestoneTimeline milestones={milestones} />
      </section>
    </Frame>
  )
}
