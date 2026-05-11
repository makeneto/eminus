import { cards } from "@/constants/Cards"

import BankCard from "./BankCard"
import { useCallback } from "react"

interface CardListProps {
  selectedCardId: string
  onSelectCard: (id: string) => void
}

export default function CardList({
  selectedCardId,
  onSelectCard,
}: CardListProps) {
  const handleCardClick = useCallback(
    (cardId: string) => {
      onSelectCard(cardId)
    },
    [onSelectCard],
  )

  return (
    <ul className="grid gap-4">
      {cards.map((card) => (
        <BankCard
          key={card.id}
          cardDetails={card}
          isActive={card.id === selectedCardId}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </ul>
  )
}
