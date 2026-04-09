import Frame from "../ui/Frame"
import SettingButton from "../ui/SettingButton"
import ProgressBar from "../ui/ProgressBar"

export default function SinglePlan() {
  return (
    <Frame>
      <div className="flex justify-between items-center">
        <p className="text-xs">Vacation</p>
        <SettingButton />
      </div>

      <ProgressBar value={30} />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <h3 className="text-[0.64rem] font-semibold">30.000 Kz</h3>
          <p className="text-[0.64rem] text-gray-400">30%</p>
        </div>

        <div className="flex items-center gap-1">
          <h3 className="text-[0.64rem] text-gray-400">Target: </h3>
          <p className="text-[0.64rem] font-semibold">100 000 kz</p>
        </div>
      </div>
    </Frame>
  )
}
