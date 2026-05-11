import { formatCardNumber } from "@/utils/formatCardNum"
import CardControls from "../cardSection/CardControls"
import CardsSection from "../payments/CardsSection"
import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import SelectFilter from "../ui/SelectFilter"
import SettingButton from "../ui/SettingButton"
import SlicedProgressBar from "../ui/SlicedProgressBar"
import TransactionTable from "../ui/TransactionTable"
import { transactionsData } from "@/constants/transactionsData"
import { ChartBarStacked } from "../ui/CashflowChart"
import { useMemo, useState } from "react"
import { cards } from "@/constants/Cards"

export default function PaymentsLayout() {
  const [selectedCardId, setSelectedCardId] = useState("card_01")
  const selectedCard = useMemo(
    () => cards.find((card) => card.id === selectedCardId) ?? cards[0],
    [selectedCardId],
  )

  return (
    <main className="payments">
      <CardsSection
        selectedCardId={selectedCardId}
        onSelectCard={setSelectedCardId}
      />

      <div className="payments__content">
        <div className="payments__content__top">
          <aside>
            <Frame>
              <CardControls type="cards" />

              <div className="grid gap-6">
                <div className="grid gap-1">
                  <p className="text-muted-foreground text-xs">Card Number</p>
                  <p className="font-semibold text-sm">
                    {formatCardNumber(selectedCard.cardNum)}
                  </p>
                </div>

                <div className="w-[75%] flex items-center justify-between">
                  <div className="grid gap-1">
                    <p className="text-muted-foreground text-xs">Expiry Date</p>
                    <p className="font-semibold text-sm">{selectedCard.exp}</p>
                  </div>

                  <div className="grid gap-1">
                    <p className="text-muted-foreground text-xs">CVV</p>
                    <p className="font-semibold text-sm">{selectedCard.cvv}</p>
                  </div>

                  <div className="grid gap-1">
                    <p className="text-muted-foreground text-xs">Status</p>
                    <p className="status-card text-sm">Active</p>
                  </div>
                </div>
              </div>
            </Frame>

            <Frame>
              <FrameHeader title="Spending Limits">
                <SettingButton />
              </FrameHeader>

              <SlicedProgressBar value={30} className="mt-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-semibold">10 000 kz</p>
                  <span className="text-xs font-medium text-muted-foreground">
                    spent of 100 000 kz
                  </span>
                </div>

                <p className="text-sm font-semibold">30%</p>
              </div>
            </Frame>
          </aside>

          <Frame>
            <FrameHeader title="Cashflow">
              <SelectFilter
                group={["This Year", "Last Year", "2024", "2023"]}
              />
            </FrameHeader>

            <ChartBarStacked getSummary={false} height="h-70" />
          </Frame>
        </div>

        <Frame>
          <div className="transaction-table h-112 flex flex-col">
            <FrameHeader title="Recent Transactions">
              <SelectFilter
                group={["This Month", "Last Month", "February", "January"]}
              />
            </FrameHeader>

            <TransactionTable transactions={transactionsData} />
          </div>
        </Frame>
      </div>
    </main>
  )
}
