import { ChartPieDonutText } from "../dashboard/ChartPieDonutText"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import { RecentActivity } from "../dashboard/RecentActivity"

export default function AsideTransaction({
  recentTransactions,
}: {
  recentTransactions: number
}) {
  return (
    <section className="aside-transaction">
      <Frame>
        <FrameHeader title="Statistics">
          <SelectFilter
            group={["This Month", "Last Month", "February", "January"]}
          />
        </FrameHeader>
        <ChartPieDonutText />
      </Frame>

      <Frame>
        <FrameHeader title="Recent Activity" />
        <RecentActivity size={recentTransactions} />
      </Frame>
    </section>
  )
}
