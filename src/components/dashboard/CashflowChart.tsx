import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expense: {
    label: "Expense",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarStacked() {
  const amount = 761450

  return (
    <div className="pt-4.5 grid gap-4">
      <header>
        <span className="text-gray-500 text-sm">Total Balance</span>
        <h1 className="font-bold text-xl">{amount.toLocaleString()} kz</h1>
      </header>
      <ChartContainer config={chartConfig} className="w-full h-[220px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="income"
            stackId="a"
            fill="var(--color-income)"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="expense"
            stackId="a"
            fill="var(--color-expense)"
            radius={[4, 4, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
