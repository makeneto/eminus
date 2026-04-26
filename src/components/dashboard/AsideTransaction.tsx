import { ChartPieDonutText } from "../ui/Chart-pie-donut-text"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectYear from "../ui/SelectYear"
import { RecentActivity } from "./RecentActivity"

export default function AsideTransaction() {
  return (
    <section className="aside-transaction">
      <Frame>
        <FrameHeader title="Statistics">
          <SelectYear />
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
