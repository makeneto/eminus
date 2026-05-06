export default function ActivePlan({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center p-1 bg-green-100 rounded-full">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"></span>
      </div>
      <p className="text-[.7rem] font-semibold">{title}</p>
    </div>
  )
}
