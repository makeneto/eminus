import { BanknoteArrowDownIcon, CirclePlus, Edit, History } from "lucide-react"

interface CardControlsProps {
  type: "cards" | "plans"
  className?: string
}

export default function CardControls({ type, className }: CardControlsProps) {
  return (
    <div
      className={`cardControls ${className || ""} ${type === "cards" ? "cardControls--cards" : "cardControls--plans"}`}
    >
      <button>
        <CirclePlus />
        <p>Add</p>
      </button>
      <button>
        <BanknoteArrowDownIcon />
        <p>Withdraw</p>
      </button>

      {type === "cards" ? (
        <button>
          <History />
          <p>History</p>
        </button>
      ) : (
        <button>
          <Edit />
          <p>Setting</p>
        </button>
      )}
    </div>
  )
}
