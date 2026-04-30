"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", amount: 186000 },
  { month: "February", amount: 305000 },
  { month: "March", amount: 237000 },
  { month: "April", amount: 73000 },
  { month: "May", amount: 209000 },
  { month: "June", amount: 214000 },
]

const chartConfig = {
  amount: {
    label: "Total Savings",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartLineDefault() {
  return (
    <CardContent>
      <div className="h-[200px] w-full overflow-hidden">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            width={0} // deixa o container mandar
            height={0}
            data={chartData}
            margin={{ left: 0, right: 0 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              hide
              domain={["dataMin - 20000", "dataMax + 20000"]}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Line
              dataKey="amount"
              type="natural"
              stroke="var(--color-amount)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </CardContent>
  )
}