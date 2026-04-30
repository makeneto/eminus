import Frame from "../ui/Frame"
import PlansList from "../savingPlans/PlansList"
import SavingTips from "../savingPlans/SavingTips"
import SavingBalance from "../savingPlans/SavingBalance"
import SettingPlan from "../savingPlans/SettingPlan"
import TransactionsPlans from "../savingPlans/TransactionsPlans"
import PlansRanking from "../savingPlans/PlansRanking"

export default function PlansMain() {
  return (
    <div className="plans__main">
      <PlansList />

      <Frame className="plans__resume">
        <div className="plans__resume-content">
          <SettingPlan />

          <div className="plans__feats">
            <SavingTips />
            <SavingBalance />
          </div>

          <PlansRanking />
        </div>

        <TransactionsPlans />
      </Frame>
    </div>
  )
}
