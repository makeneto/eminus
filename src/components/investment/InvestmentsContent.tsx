import { EllipsisVertical, Plus } from "lucide-react"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import { companies } from "@/constants/companies"
import { Button } from "../ui/button"

export default function InvestmentsContent() {
  return (
    <main className="invest__content">
      <section className="invest__content--companies">
        <Frame>
          <FrameHeader title="My Companies">
            <button className="btn--secondary">
              <Plus />
              Add Company
            </button>
          </FrameHeader>

          <ul className="invest__companies">
            {companies.map((company) => (
              <li className="invest__companies__item">
                <header className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="invest__companies__item--logo">
                      <img src={company.logo} alt={company.name} />
                    </div>
                    <p className="text-sm font-medium">{company.name}</p>
                  </div>

                  <Button variant="ghost" size="xs">
                    <EllipsisVertical size={14} />
                  </Button>
                </header>

                <h1 className="text-lg font-bold">
                  {company.currentBalance.toLocaleString()} kz
                </h1>
              </li>
            ))}
          </ul>
        </Frame>

        <div className="invest--feats">
          <Frame>
            <FrameHeader title="Return per company">
              <span className="text-sm text-zinc-500">
                vs. Invested capital
              </span>
            </FrameHeader>
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
