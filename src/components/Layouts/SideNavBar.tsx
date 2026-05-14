import {
  ArrowLeftRight,
  ChartNoAxesCombined,
  CreditCard,
  Leaf,
  Lightbulb,
  Mail,
  TrendingUp,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import NavLogo from "../sideNavbar/NavLogo"
import OthersOptions from "./OthersOptions"

export default function SideNavBar() {
  return (
    <aside className="sideNavBar">
      <NavLogo />

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
      </nav>

      <OthersOptions />
    </aside>
  )
}
