import { LogOut, Settings } from "lucide-react"
import OtherLinks from "../sideNavbar/OtherLinks"

export default function OthersOptions() {
  return (
    <section className="otherLink">
      <h1 className="uppercase text-[0.75rem] text-muted-foreground">Others</h1>

      <div className="otherLink__list">
        <OtherLinks
          icon={<Settings size={20} />}
          title="Settings"
          link="/settings"
        />
        <OtherLinks
          icon={<LogOut size={20} />}
          title="Logout"
          link="/login"
          variant="redLink"
        />
      </div>
    </section>
  )
}
