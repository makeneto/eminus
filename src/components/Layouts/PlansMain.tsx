import { Plus } from "lucide-react"
import SinglePlan from "../cardSection/SinglePlan"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"

export default function PlansMain() {
  return (
    <div className="plans__main">
      <Frame>
        <FrameHeader title="Saving Plans" />

        <SinglePlan type="main" />
        <SinglePlan type="main" />
        <SinglePlan type="main" />
        <SinglePlan type="main" />
        <SinglePlan type="main" />

        <button className="btn--main">
          <Plus size={14} /> Add Plan
        </button>
      </Frame>

      <Frame>
        <h1>Plans</h1>
      </Frame>
    </div>
  )
}
