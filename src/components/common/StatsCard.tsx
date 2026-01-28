interface StatsCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  color?: string
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "bg-blue-600",
}: StatsCardProps) {
  return (
    <div
      className={`flex items-center p-4 rounded shadow ${color} text-white`}
    >
      {icon && <div className="mr-4">{icon}</div>}
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  )
}