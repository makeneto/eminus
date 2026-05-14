import { NavLink } from "react-router-dom"

interface OtherLinks {
  icon: React.ReactNode
  title: string
  link: string
  variant?: string
}

export default function OtherLinks({ icon, title, link, variant }: OtherLinks) {
  const isLogout = title === "logout"

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        [
          "otherLink__item",
          variant ? "otherLink__item--redLink" : "",
          isActive
            ? isLogout
              ? "activeLink--red"
              : "activeLink--default"
            : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {icon}
      <p className="text-sm">{title}</p>
    </NavLink>
  )
}
