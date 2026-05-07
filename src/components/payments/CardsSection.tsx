import { Plus } from "lucide-react"

import { Button } from "../ui/button"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import CardList from "./CardList"

export default function CardsSection() {
  return (
    <Frame className="payments__cardList">
      <FrameHeader title="My Cards">
        <Button variant="ghost" size="sm" className="hover:bg-transparent">
          <Plus />
          Add Card
        </Button>
      </FrameHeader>

      <CardList />
    </Frame>
  )
}
