import Frame from "../ui/Frame"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import SelectFilter from "../ui/SelectFilter"
import { ChartLineMultiple } from "../ui/ChartLineMultiple"

export default function InvestmentsHeader() {
  return (
    <Frame className="invest__header--frame">
      <section className="invest__header--layout">
        <div className="invest__header--content">
          <div className="grid gap-1.5">
            <p className="flex items-center gap-1 text-muted-foreground">
              Current Value <ArrowUpRight size={15} />
            </p>
            <div className="flex items-baseline gap-4">
              <h1 className="text-3xl font-bold">689 950 Kz</h1>
              <div className="invest__header--tradingUp flex items-center gap-1.5">
                <TrendingUp size={16} />
                <p className="text-sm">1.6%</p>
              </div>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="grid gap-1">
              <p className="flex items-center gap-1 text-muted-foreground">
                Total Companies <ArrowUpRight size={15} />
              </p>
              <h2 className="text-xl font-bold">3</h2>
            </div>
            <div className="grid gap-1">
              <p className="flex items-center gap-1 text-muted-foreground">
                Cash Balance <ArrowUpRight size={15} />
              </p>
              <h2 className="text-xl font-bold">
                136 780 <span className="currency">Kz</span>
              </h2>
            </div>
            <div className="grid gap-1">
              <p className="flex items-center gap-1 text-muted-foreground">
                Committed Cash <ArrowUpRight size={15} />
              </p>
              <h2 className="text-xl font-bold">
                1 780 <span className="currency">Kz</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="invest__header--chartMultiple">
          <div className="flex justify-end">
            <SelectFilter group={["This Year", "Last Year", "2024"]} />
          </div>
          <ChartLineMultiple />
        </div>
      </section>
    </Frame>
  )
}
