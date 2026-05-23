import { CompanyList } from "./CompanyList"
import GoalCompany from "./CompanyGoal"
import RecentActivity from "./RecentActivity"
import ReturnPerCompany from "./ReturnPerCompany"
import TopPerformer from "./TopPerformer"

export default function InvestmentsContent() {
  return (
    <main className="invest__content">
      <section className="invest__content--companies">
        <CompanyList />

        <div className="invest__feats">
          <ReturnPerCompany />
          <TopPerformer />
          <GoalCompany />
        </div>
      </section>

      <section>
        <RecentActivity />
        <TopPerformer />
      </section>
    </main>
  )
}
