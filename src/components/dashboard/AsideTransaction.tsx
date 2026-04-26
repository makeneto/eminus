import { ChartPieDonutText } from "../ui/ChartPieDonutText"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectTime from "../ui/SelectTime"
import { RecentActivity } from "./RecentActivity"

export default function AsideTransaction() {
  return (
    <section className="aside-transaction">
      <Frame>
        <FrameHeader title="Statistics">
          <SelectTime group={["This Month", "Last Month", "February", "January"]} />
        </FrameHeader>
        <ChartPieDonutText />
      </Frame>

      <Frame>
        <FrameHeader title="Recent Activity" />
        <RecentActivity />
      </Frame>
    </section>
  )
}
