"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, Sector } from "recharts"
import type { PieSectorShapeProps } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart with an active sector"

const chartData = [
  { plan: "Vacation", completed: 275, fill: "var(--color-vacation)" },
  { plan: "Emergency", completed: 200, fill: "var(--color-emergency)" },
  { plan: "Home", completed: 187, fill: "var(--color-home)" },
  { plan: "New Car", completed: 173, fill: "var(--color-newCar)" },
  { plan: "Graduation", completed: 90, fill: "var(--color-graduation)" },
]

const chartConfig = {
  completed: {
    label: "Completed",
  },
  vacation: {
    label: "Vacation",
    color: "var(--chart-1)",
  },
  emergency: {
    label: "Emergency",
    color: "var(--chart-2)",
  },
  home: {
    label: "Home",
    color: "var(--chart-3)",
  },
  newCar: {
    label: "New Car",
    color: "var(--chart-4)",
  },
  graduation: {
    label: "Graduation",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

const ACTIVE_INDEX = 0

export function ChartPieDonutActive() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="completed"
              nameKey="plan"
              innerRadius={60}
              strokeWidth={5}
              shape={({
                index,
                outerRadius = 0,
                ...props
              }: PieSectorShapeProps) =>
                index === ACTIVE_INDEX ? (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                ) : (
                  <Sector {...props} outerRadius={outerRadius} />
                )
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total completed for the latest
        </div>
      </CardFooter>
    </Card>
  )
}
