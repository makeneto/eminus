import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"
import ProgressBar from "../ui/ProgressBar"
import { Plane } from "lucide-react"

interface SinglePlanProps {
  type?: "main" | "secondary"
}

export default function SinglePlan({ type = "secondary" }: SinglePlanProps) {
  const isMain = type === "main"

  return (
    <Frame>
      {isMain ? (
        <>
          {/* MAIN */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="p-2.5 rounded-full bg-[#eef8ef]">
                <Plane size={17} />
              </div>

              <div className="grid gap-1">
                <h2 className="text-sm font-medium">Vacation</h2>
                <p className="text-[0.7rem] font-medium">
                  150 000kz{" "}
                  <span className="text-muted-foreground">/ 250 000kz</span>
                </p>
              </div>
            </div>

            <div className="grid gap-1 text-right">
              <h2 className="text-sm font-medium">60%</h2>
              <p className="text-[0.7rem] font-bold">In Progress</p>
            </div>
          </div>

          <ProgressBar value={60} />
        </>
      ) : (
        <>
          {/* SECONDARY */}
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">Vacation</p>
            <SettingButton />
          </div>

          <ProgressBar value={30} />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[0.64rem] font-semibold">30.000 Kz</h3>
              <p className="text-[0.64rem] text-gray-400">30%</p>
            </div>

            <div className="flex items-center gap-1">
              <h3 className="text-[0.64rem] text-gray-400">Target:</h3>
              <p className="text-[0.64rem] font-semibold">100 000 kz</p>
            </div>
          </div>
        </>
      )}
    </Frame>
  )
}
