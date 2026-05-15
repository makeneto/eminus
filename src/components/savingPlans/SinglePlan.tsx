import React, { useMemo } from "react"
import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"
import ProgressBar from "../ui/ProgressBar"
import { MoveRight, Plane } from "lucide-react"

interface SinglePlanProps {
  title: string
  saving: number
  target: number
  type?: "main" | "secondary"
  isActive?: boolean
  active?: boolean
  onClick?: () => void
}

export default function SinglePlan({
  title,
  saving,
  target,
  type = "secondary",
  isActive = false,
  onClick,
}: SinglePlanProps) {
  const isMain = type === "main"
  const process = useMemo(
    () => Math.round((saving / target) * 100),
    [saving, target],
  )
  const clickable = Boolean(onClick)

  return (
    <Frame
      active={isActive}
      className={`plans__card ${isActive ? "plans__card--active" : ""} ${
        clickable ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(event) => {
        if (clickable && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      {isMain ? (
        <React.Fragment>
          {/* MAIN */}
          <div className="relative flex items-center justify-between w-full ">
            <div className="flex items-center gap-2">
              <div className="p-2.5 rounded-full plans__card--icon">
                <Plane size={17} />
              </div>

              <div className="grid gap-1">
                <h2 className="text-sm font-medium">{title}</h2>
                <p className="text-[0.7rem] font-medium">
                  {saving.toLocaleString()}kz{" "}
                  <span className="text-muted-foreground">
                    / {target.toLocaleString()}kz
                  </span>
                </p>
              </div>
            </div>

            {isActive && (
              <MoveRight className="border border-white  bg-white absolute -right-14 top-[40%] w-8 h-auto" />
            )}

            <div className="grid gap-1 text-right">
              <h2 className="text-sm font-medium">{process}%</h2>
              <p className="text-[0.7rem] font-bold">
                {process < 100 ? "In Process" : "Completed"}
              </p>
            </div>
          </div>

          <ProgressBar value={process} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* SECONDARY */}
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{title}</p>
            <SettingButton />
          </div>

          <ProgressBar value={process} />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[0.64rem] font-semibold">
                {saving.toLocaleString()} Kz
              </h3>
              <p className="text-[0.64rem] text-gray-400">{process}%</p>
            </div>

            <div className="flex items-center gap-1">
              <h3 className="text-[0.64rem] text-gray-400">Target:</h3>
              <p className="text-[0.64rem] font-semibold">
                {target.toLocaleString()} kz
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </Frame>
  )
}
