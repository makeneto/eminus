import {
  ArrowLeftRight,
  ChartNoAxesCombined,
  CreditCard,
  Leaf,
  Lightbulb,
  Mail,
  MessageCircleQuestionMark,
  TrendingUp,
} from "lucide-react"
import { NavLink } from "react-router-dom"

import OthersOptions from "./OthersOptions"
import NavHeader from "../sideNavbar/NavHeader"

export default function SideNavBar() {
  return (
    <aside className="sideNavBar">
      <NavHeader />

      <nav>
        <NavLink
          to="/"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <ChartNoAxesCombined />
          Dashboard
        </NavLink>
        <NavLink
          to="/payments"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <CreditCard />
          Payments
        </NavLink>
        <NavLink
          to="/transactions"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <ArrowLeftRight />
          Transactions
        </NavLink>
        <NavLink
          to="/plans"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <Leaf />
          Saving Plans
        </NavLink>
        <NavLink
          to="/investments"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <TrendingUp />
          Investments
        </NavLink>
        <NavLink
          to="/inbox"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <Mail />
          Inbox
        </NavLink>
        <NavLink
          to="/insights"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "activeLink--default" : "")}
        >
          <Lightbulb />
          Insights
        </NavLink>

        <section className="assistantLinks">
          <NavLink
            to="/help"
            prefetch="intent"
            className={({ isActive }) =>
              isActive ? "activeLink--default" : ""
            }
          >
            <MessageCircleQuestionMark />
            Help Center
          </NavLink>
        </section>
      </nav>

      <OthersOptions />
    </aside>
  )
}
