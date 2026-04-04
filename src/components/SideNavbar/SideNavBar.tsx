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
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ChartNoAxesCombined />
          Dashboard
        </NavLink>
        <NavLink
          to="/payments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <CreditCard />
          Payments
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ArrowLeftRight />
          Transactions
        </NavLink>
        <NavLink
          to="/plans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Leaf />
          Saving Plans
        </NavLink>
        <NavLink
          to="/investments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <TrendingUp />
          Investments
        </NavLink>
      </nav>
    </aside>
  )
}
