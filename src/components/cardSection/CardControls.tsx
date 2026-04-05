import { BanknoteArrowDownIcon, CirclePlus, History } from "lucide-react"

export default function CardControls() {
  return (
    <div className="cardControls">
      <button>
        <CirclePlus />
        <p>Adicionar</p>
      </button>
      <button>
        <BanknoteArrowDownIcon />
        <p>Retirar</p>
      </button>
      <button>
        <History />
        <p>Histórico</p>
      </button>
    </div>
  )
}
