import { Nfc } from "lucide-react"

export default function Card() {
  return (
    <div className="creditCard">
      <span className="fingerSpace"></span>
      <div className="cardHeader">
        <div className="logo">
          <img src="/eminus-dark-logo.svg" alt="Logo" />
        </div>
        <Nfc />
      </div>

      <div className="cardBody">
        <h2>Martin Forbist</h2>
      </div>

      <div className="cardFooter">
        <div>
          <span>Balance Amount</span>
          <h1><span>AOA</span> 1.500.000,00</h1>
        </div>

        <div className="cardInfo">
          <div>
            <span>EXP</span>
            <p>4/30</p>
          </div>
          <div>
            <span>CVV</span>
            <p>244</p>
          </div>
        </div>
      </div>
    </div>
  )
}
