import { cards } from "@/constants/Cards"
import { formatCardNumber } from "@/utils/formatCardNum"
import EminusCardLogo from "../ui/EminusCardLogo"
import { Nfc } from "lucide-react"

export default function CardList() {
  return (
    <ul className="grid gap-4">
      {cards.map((card) => (
        <li className="payments__cardList--card" key={card.id}>
          <span className="fingerSpace bg-[#eef8ef]" />
          <div className="flex items-center justify-between">
            <p className="payments__cardList--card-title">{card.title}</p>

            <EminusCardLogo />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="payments__cardList--card-amount">
              {card.amount.toLocaleString()} kz
            </h1>
            <p className="payments__cardList--card-nfc">
              <Nfc />
            </p>
          </div>

          <div className="flex items-center justify-between pr-1">
            <div>
              <p className="payments__cardList--card-cardNumText">
                Card Number
              </p>
              <p className="payments__cardList--card-cardNum text-[.83rem] font-medium">
                {formatCardNumber(card.cardNum)}
              </p>
            </div>

            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="payments__cardList--card-expText">EXP</p>
                <p className="payments__cardList--card-exp text-[.83rem] font-medium">
                  {card.exp}
                </p>
              </div>
              <div>
                <p className="payments__cardList--card-cvvText">CVV</p>
                <p className="payments__cardList--card-cvv text-[.83rem] font-medium">
                  {card.cvv}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
