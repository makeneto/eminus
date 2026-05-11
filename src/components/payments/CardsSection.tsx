import { Plus } from "lucide-react"

import { Button } from "../ui/button"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import CardList from "./CardList"

interface CardListProps {
  selectedCardId: string
  onSelectCard: (id: string) => void
}

export default function CardsSection({
  selectedCardId,
  onSelectCard,
}: CardListProps) {
  return (
    <Frame className="payments__cardList">
      <FrameHeader title="My Cards">
        <Button variant="ghost" size="sm" className="hover:bg-transparent">
          <Plus />
          Add Card
        </Button>
      </FrameHeader>

      <CardList selectedCardId={selectedCardId} onSelectCard={onSelectCard} />
    </Frame>
  )
}
