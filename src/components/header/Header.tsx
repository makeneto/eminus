import ChatBoxButton from "./ChatBoxButton"
import NotificationsButton from "./NotificationsButton"
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

        <div className="flex gap-3.5 items-center">
          <ChatBoxButton />
          <NotificationsButton />
        </div>

        <Profile />
      </div>
    </header>
  )
}
