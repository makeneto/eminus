import Notifications from "./Notifications"
import Profile from "./Profile"
import TodaysDate from "./TodaysDate"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="headerPage">
      <h1>{title}</h1>

      <div className="flex gap-8 items-center">
        <TodaysDate />
        <Notifications />
        <Profile />
      </div>
    </header>
  )
}
