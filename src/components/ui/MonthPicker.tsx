import * as React from "react"
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

interface MonthPickerProps {
  value?: { month: number; year: number }
  onChange?: (value: { month: number; year: number }) => void
  className?: string
}

export function MonthPicker({ value, onChange, className }: MonthPickerProps) {
  const today = new Date()
  const [selected, setSelected] = React.useState(
    value ?? { month: today.getMonth(), year: today.getFullYear() },
  )
  const [viewYear, setViewYear] = React.useState(selected.year)
  const [open, setOpen] = React.useState(false)

  const handleSelect = (month: number) => {
    const next = { month, year: viewYear }
    setSelected(next)
    onChange?.(next)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "flex items-center gap-2 px-3 py-2 h-9 rounded-lg bg-background text-sm font-medium text-foreground shadow-none",
            className,
          )}
        >
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="pt-0.5 text-muted-foreground">
            {MONTHS[selected.month]} {selected.year}
          </span>
          <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-3" align="start">
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewYear((y) => y - 1)}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-semibold">{viewYear}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewYear((y) => y + 1)}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {MONTHS.map((name, i) => {
            const isSelected =
              selected.month === i && selected.year === viewYear
            return (
              <Button
                key={name}
                variant={isSelected ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "h-8 text-xs font-medium rounded-md",
                  isSelected && "bg-[#9ae287] text-[#023535]",
                )}
                onClick={() => handleSelect(i)}
              >
                {name.slice(0, 3)}
              </Button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
