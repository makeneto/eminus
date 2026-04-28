import { Calendar1 } from "lucide-react"

export default function TodaysDate() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex items-center gap-1.5 text-sm text-gray-500">
      <Calendar1 size={15} />
      {formattedDate}
    </div>
  )
}
