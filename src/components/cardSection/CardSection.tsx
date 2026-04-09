import Card from "./Card"
import CardControls from "./CardControls"
import DailyLimit from "./DailyLimit"
import SavingPlans from "./SavingPlans"

export default function CardSection() {
  return (
    <div className="cardSection">
      <Card />
      <CardControls />
      <DailyLimit />
      <SavingPlans />
    </div>
  )
}
