import SavingPlans from "../savingPlans/SavingPlans"
import Card from "./MainCard"
import CardControls from "./CardControls"
import DailyLimit from "./DailyLimit"

export default function CardSection() {
  return (
    <div className="cardSection">
      <Card />
      <CardControls type="cards" />
      <DailyLimit />
      <SavingPlans />
    </div>
  )
}
