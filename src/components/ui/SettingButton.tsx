import { EllipsisVertical } from "lucide-react"

export default function SettingButton({ size = 0.8 }: { size?: number }) {
  return (
    <button className="settingButton">
      <EllipsisVertical style={{ width: `${size}rem` }} />
    </button>
  )
}
