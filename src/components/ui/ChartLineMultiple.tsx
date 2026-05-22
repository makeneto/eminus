"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", yango: 186000, marmitas: 80000 },
  { month: "February", yango: 305000, marmitas: 200000 },
  { month: "March", yango: 237000, marmitas: 120000 },
  { month: "April", yango: 73000, marmitas: 190000 },
  { month: "May", yango: 209000, marmitas: 130000 },
  { month: "June", yango: 214000, marmitas: 140000 },
  { month: "July", yango: 186000, marmitas: 80000 },
  { month: "August", yango: 305000, marmitas: 200000 },
  { month: "September", yango: 237000, marmitas: 120000 },
  { month: "October", yango: 73000, marmitas: 190000 },
  { month: "November", yango: 209000, marmitas: 130000 },
  { month: "December", yango: 186000, marmitas: 80000 },
]

const chartConfig = {
  yango: {
    label: "Yango",
    color: "var(--chart-1)",
  },
  marmitas: {
    label: "Marmitas",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const currentMonthIndex = chartData.findIndex(
  (item) =>
    item.month === new Date().toLocaleString("en-US", { month: "long" }),
)

const defaultIndex = currentMonthIndex !== -1 ? currentMonthIndex : 0

export function ChartLineMultiple() {
  return (
    <CardContent>
      <ChartContainer config={chartConfig} className="w-full h-30">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
            defaultIndex={defaultIndex}
          />
          <Line
            dataKey="yango"
            type="monotone"
            stroke="var(--color-yango)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="marmitas"
            type="monotone"
            stroke="var(--color-marmitas)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
  )
}
