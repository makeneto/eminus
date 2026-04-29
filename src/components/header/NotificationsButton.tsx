import { Bell } from "lucide-react"

export default function NotificationsButton() {
  return (
    <div className="bg-[#eef8ef] p-2.5 rounded-full relative">
      <span className="absolute top-2 right-2.5 bg-red-500 text-white text-xs rounded-full h-2 w-2 flex items-center justify-center" />
      <Bell size={18} />
    </div>
  )
}
