import CardsSection from "../payments/CardsSection"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"

export default function PaymentsLayout() {
  return (
    <main className="payments">
      <CardsSection />

      <div className="payments__content">
        <div className="payments__content__top">
          <aside>
            <Frame>Card Controls</Frame>

            <Frame>
              <FrameHeader title="Spending Limits" />
            </Frame>
          </aside>

          <Frame>
            <FrameHeader title="Cashflow">
              <SelectFilter
                group={["This Year", "Last Year", "2024", "2023"]}
              />
            </FrameHeader>
          </Frame>
        </div>

        <Frame>
          <FrameHeader title="Transactions Table">
            <SelectFilter
              group={["This Month", "Last Month", "February", "January"]}
            />
          </FrameHeader>
        </Frame>
      </div>
    </main>
  )
}
