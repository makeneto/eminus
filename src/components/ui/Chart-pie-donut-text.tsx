"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { name: "Rent & Living", value: 475000, fill: "var(--chart-1)" },
  { name: "Investments", value: 200000, fill: "var(--chart-2)" },
  { name: "Education", value: 287000, fill: "var(--chart-3)" },
  { name: "Food & Drinks", value: 173000, fill: "var(--chart-4)" },
  { name: "Entertainment", value: 190000, fill: "var(--chart-5)" },
]

// ✅ CONFIG OBRIGATÓRIO (corrige o crash)
const chartConfig = {
  value: {
    label: "Expenses",
  },
  "Rent & Living": { color: "var(--chart-1)" },
  Investments: { color: "var(--chart-2)" },
  Education: { color: "var(--chart-3)" },
  "Food & Drinks": { color: "var(--chart-4)" },
  Entertainment: { color: "var(--chart-5)" },
} satisfies ChartConfig

export function ChartPieDonutText() {
  const total = React.useMemo(
    () => chartData.reduce((acc, item) => acc + item.value, 0),
    [],
  )

  const sortedData = React.useMemo(
    () => [...chartData].sort((a, b) => b.value - a.value),
    [],
  )

  return (
    <CardContent className="grid md:flex-row items-center gap-4">
      {/* CHART */}
      <ChartContainer
        config={chartConfig}
        className="w-full aspect-square min-w-[200px] min-h-[200px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={sortedData}
            dataKey="value"
            nameKey="name"
            innerRadius="60%"
            strokeWidth={8}
            paddingAngle={3}
          >
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox)) return null
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan className="text-2xl font-bold fill-foreground">
                      {total.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      dy={20}
                      className="text-sm fill-muted-foreground"
                    >
                      Total Expenses
                    </tspan>
                  </text>
                )
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      {/* LISTA IGUAL À IMAGEM */}
      <div className="grid gap-5 w-full space-y-3">
        {sortedData.map((item) => {
          const percent = ((item.value / total) * 100).toFixed(0)

          return (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-7.5 w-11 items-center justify-center rounded-lg text-xs font-semibold ${item.name === "Education" || item.name === "Investments" ? "text-white" : ""}`}
                  style={{ backgroundColor: item.fill }}
                >
                  {percent}%
                </div>

                <span className="text-sm ">{item.name}</span>
              </div>

              <span className="text-sm font-medium">
                {item.value.toLocaleString()} Kz
              </span>
            </div>
          )
        })}
      </div>
    </CardContent>
  )
}
