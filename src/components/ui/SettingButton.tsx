import { EllipsisVertical } from "lucide-react"
import { Button } from "./button"

export default function SettingButton({ size = 0.8 }: { size?: number }) {
  return (
    <Button variant="ghost" size="icon-xs" className="settingButton">
      <EllipsisVertical style={{ width: `${size}rem` }} />
    </Button>
  )
}
