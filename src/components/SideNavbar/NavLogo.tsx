import { NavLink } from "react-router-dom"

export default function NavLogo() {
  return (
    <NavLink to="/" className="navLogo">
      <img src="/eminus-full-logo.svg" alt="Eminus Logo" />
    </NavLink>
  )
}
