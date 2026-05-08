import { Link } from "react-router-dom"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import ProgressBar from "../ui/ProgressBar"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"

export default function DailyLimit() {
  return (
    <Frame className="dailyLimit">
      <FrameHeader title="Daily Limit">
        <Link to="/payments" prefetch="render" className="ml-auto">
          <Button variant="ghost" size="icon-xs">
            <ArrowUpRight />
          </Button>
        </Link>
      </FrameHeader>

      <div className="content">
        <div className="text">
          <p>
            50 000 kz
            <span className="limit"> spent of 200 000 kz</span>
          </p>

          <p>25%</p>
        </div>

        <ProgressBar value={25} />
      </div>
    </Frame>
  )
}
