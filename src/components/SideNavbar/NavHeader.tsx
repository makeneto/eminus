import { Sidebar } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function NavHeader() {
  return (
    <header className="navHeader">
      <NavLink to="/">
        <img src="/eminus-full-logo.svg" alt="Eminus Logo" />
      </NavLink>
      <div className="navHeader--sideBar">
        <Sidebar />
      </div>
    </header>
  )
}
