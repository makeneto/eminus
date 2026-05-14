import ChatBoxButton from "../header/ChatBoxButton"
import NotificationsButton from "../header/NotificationsButton"
import TodaysDate from "../header/TodaysDate"
import Profile from "../header/Profile"

export default function Header({ title }: { title: string }) {
  return (
    <header className="headerPage">
      <h1>{title}</h1>

      <div className="flex gap-10 items-center">
        <TodaysDate />

        <div className="flex gap-5 items-center">
          <ChatBoxButton />
          <NotificationsButton />
        </div>

        <Profile />
      </div>
    </header>
  )
}
