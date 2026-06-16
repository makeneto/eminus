import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

interface ChartBarStackedProps {
  getSummary?: boolean
  height: string
}

const chartData = [
  { month: "January", income: 186000, expense: 80000 },
  { month: "February", income: 305000, expense: 200000 },
  { month: "March", income: 237000, expense: 120000 },
  { month: "April", income: 830000, expense: 190000 },
  { month: "May", income: 209000, expense: 130000 },
  { month: "June", income: 590000, expense: 110000  },
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

export function ChartBarStacked({
  getSummary = true,
  height,
}: ChartBarStackedProps) {
  const amount = 761450

  return (
    <div className="pt-4.5 grid gap-4">
      {getSummary && (
        <header>
          <span className="text-gray-500 text-sm">Total Balance</span>
          <h1 className="font-bold text-xl">{amount.toLocaleString()} kz</h1>
        </header>
      )}

      <ChartContainer config={chartConfig} className={`w-full ${height}`}>
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
            barSize={50}
          />
          <Bar
            dataKey="expense"
            stackId="a"
            fill="var(--color-expense)"
            radius={[4, 4, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
