import { formatCardNumber } from "@/utils/formatCardNum"
import EminusCardLogo from "../ui/EminusCardLogo"
import { Nfc } from "lucide-react"

interface CardDetailsProps {
  cardDetails: {
    title: string
    amount: number
    cardNum: number
    exp: string
    cvv: number
  }
  isActive?: boolean
  onClick?: () => void
}

export default function BankCard({
  cardDetails,
  isActive = false,
  onClick,
}: CardDetailsProps) {
  const { title, amount, cardNum, exp, cvv } = cardDetails

  return (
    <li
      className={`payments__cardList--card ${isActive ? "payments__cardList--card--active" : ""}`}
      onClick={onClick}
    >
      <span className="fingerSpace bg-[#eef8ef]" />
      <div className="flex items-center justify-between">
        <p className="payments__cardList--card-title">{title}</p>
        <EminusCardLogo />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="payments__cardList--card-amount">
          {amount.toLocaleString()} kz
        </h1>
        <p className="payments__cardList--card-nfc">
          <Nfc />
        </p>
      </div>

      <div className="flex items-center justify-between pr-1">
        <div>
          <p className="payments__cardList--card-cardNumText">Card Number</p>
          <p className="payments__cardList--card-cardNum text-[.83rem] font-medium">
            {formatCardNumber(cardNum)}
          </p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="payments__cardList--card-expText">EXP</p>
            <p className="payments__cardList--card-exp text-[.83rem] font-medium">
              {exp}
            </p>
          </div>
          <div>
            <p className="payments__cardList--card-cvvText">CVV</p>
            <p className="payments__cardList--card-cvv text-[.83rem] font-medium">
              {cvv}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
