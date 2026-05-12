import { MessageCircleMore } from "lucide-react"

export default function ChatBoxButton() {
  return (
    <div className="bg-[#eef8ef] p-2.5 rounded-full relative cursor-pointer">
      <span className="absolute top-2 right-2.5 bg-red-500 text-white text-xs rounded-full h-2 w-2 flex items-center justify-center" />
      <MessageCircleMore size={18} />
    </div>
  )
}
