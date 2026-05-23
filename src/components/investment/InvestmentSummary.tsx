export default function InvestmentSummary() {
  return (
    <div className="invest__summary flex items-center justify-between py-3.5 px-4">
      <div className="grid gap-0.5">
        <p className="text-xs font-medium">Total Earned</p>
        <p className="font-semibold text-sm text-[#16a34a]">+360 000 kz</p>
      </div>

      <div className="grid gap-0.5">
        <p className="text-sm font-medium">Avg. ROI</p>
        <p className="font-semibold text-sm text-[#16a34a]">+33.3%</p>
      </div>
    </div>
  )
}