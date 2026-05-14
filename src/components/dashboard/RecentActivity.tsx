import { activities } from "@/constants/activities"

export function RecentActivity({ size }: { size: number }) {
  return (
    <div className="w-full max-w-md p-3">
      <div
        className="grid gap-6 space-y-5 overflow-y-auto no-scroll-bar"
        style={{ maxHeight: `${size}rem` }}
      >
        {activities.map((group) => (
          <div key={group.day} className="grid gap-3">
            <p className="text-[0.9rem] font-medium">{group.day}</p>

            <div className="grid gap-4">
              {group.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 relative">
                  {index < group.items.length - 1 && (
                    <div className="absolute left-[0.9rem] top-8 -bottom-4 w-0.5 bg-border" />
                  )}

                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-8 w-8 rounded-full object-cover relative z-10 border-2 border-background"
                  />

                  <div className="flex flex-col gap-1">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </p>

                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
