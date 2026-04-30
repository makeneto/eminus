import SavingPlans from "../savingPlans/SavingPlans"
import Card from "./Card"
import CardControls from "./CardControls"
import DailyLimit from "./DailyLimit"

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
