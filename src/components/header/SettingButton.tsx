import { Settings } from "lucide-react"
import { Link } from "react-router-dom"

export default function SettingButton() {
  return (
    <Link to="/settings" prefetch="intent" className="btn--simple">
      <Settings size={22} />
    </Link>
  )
}
