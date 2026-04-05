import ProgressBar from "../ui/ProgressBar"
import SettingButton from "../ui/SettingButton"

export default function DailyLimit() {
  return (
    <div className="limitDaily">
      <div className="limitDaily__header">
        <h1>Daily Limit</h1>
        <SettingButton />
      </div>

      <div className="content">
        <div className="text">
          <p>
            50.000 kz
            <span className="limit"> spent of 200.000 kz</span>
          </p>

          <p>25%</p>
        </div>

        <ProgressBar value={25} />
      </div>
    </div>
  )
}
