interface DataItem {
  sortedData: { name: string; value: number; fill: string }[]
  total: number
}

export default function ChartPieDonutList({ sortedData, total }: DataItem) {
  return (
    <div className="grid gap-2 w-full space-y-3">
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
  )
}
