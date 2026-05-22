import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"

import { CompanyList } from "./CompanyList"
import InvestmentsList from "./InvestmentsList"

export default function InvestmentsContent() {
  return (
    <main className="invest__content">
      <section className="invest__content--companies">
        <CompanyList />

        <div className="invest--feats">
          <Frame>
            <FrameHeader title="Return per company">
              <span className="text-sm text-zinc-500">
                vs. Invested capital
              </span>
            </FrameHeader>

            <InvestmentsList />
          </Frame>

          <Frame>
            <FrameHeader title="Investment Goal">
              <SelectFilter group={["Yango Cars", "Marmitas", "Goldera"]} />
            </FrameHeader>
          </Frame>
        </div>
      </section>

      <section>
        <Frame>
          <FrameHeader title="Recent Activity" />
        </Frame>

        <Frame>
          <FrameHeader title="Top Performer" />
        </Frame>
      </section>
    </main>
  )
}
