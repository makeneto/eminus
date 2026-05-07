export function formatCardNumber(cardNum: number): string {
  const str = cardNum.toString()
  const last4 = str.slice(-4)
  return `**** **** **** ${last4}`
}
