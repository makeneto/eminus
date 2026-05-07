import type { PaymentCards } from "@/components/interfaces/paymentCards"

export const cards: PaymentCards[] = [
  {
    id: "card_001",
    holder: "Makene Neto",
    title: "Platinum Plus Visa",
    bank: "BIC",
    amount: 415000,
    accountType: "Debit",
    cardNum: 2453647347389967,
    exp: "12/29",
    cvv: 313,
  },
  {
    id: "card_002",
    holder: "Nela Furtado",
    title: "Freedom Unlimited",
    bank: "BAI",
    amount: 532000,
    accountType: "Credit",
    cardNum: 6473928365748374,
    exp: "07/31",
    cvv: 411,
  },
  {
    id: "card_003",
    holder: "Makene Neto",
    title: "Elite Traveler",
    bank: "BCI",
    amount: 430000,
    accountType: "Credit",
    cardNum: 5532007854779981,
    exp: "05/30",
    cvv: 932,
  },
]
