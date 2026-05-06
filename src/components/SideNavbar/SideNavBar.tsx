import {
  ArrowLeftRight,
  ChartNoAxesCombined,
  CreditCard,
  Leaf,
  TrendingUp,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import NavLogo from "./NavLogo"

export default function SideNavBar() {
  return (
    <aside className="sideNavBar">
      <NavLogo />

      <nav>
        <NavLink
          to="/"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ChartNoAxesCombined />
          Dashboard
        </NavLink>
        <NavLink
          to="/payments"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <CreditCard />
          Payments
        </NavLink>
        <NavLink
          to="/transactions"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ArrowLeftRight />
          Transactions
        </NavLink>
        <NavLink
          to="/plans"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Leaf />
          Saving Plans
        </NavLink>
        <NavLink
          to="/investments"
          prefetch="intent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <TrendingUp />
          Investments
        </NavLink>
      </nav>
    </aside>
  )
}
