import ChatBoxButton from "./ChatBoxButton"
import NotificationsButton from "./NotificationsButton"
import TodaysDate from "./TodaysDate"
import SettingButton from "./SettingButton"

export default function Header({ title }: { title: string }) {
  return (
    <header className="headerPage">
      <h1>{title}</h1>

      <div className="flex gap-10 items-center">
        <TodaysDate />

        <div className="flex gap-5 items-center">
          <ChatBoxButton />
          <NotificationsButton />
          <SettingButton />
        </div>
      </div>
    </header>
  )
}
