import { useSchedules } from "../../hooks/useSchedules"
import { useArticles } from "../../hooks/useArticles"
import { Calendar, FileText, AlertTriangle } from "lucide-react"

export function Dashboard() {
  const { schedules, isLoading: schedulesLoading } = useSchedules()
  const { articles, isLoading: articlesLoading } = useArticles()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Schedules Card */}
        <div className="p-6 rounded-xl border bg-card">
          <div className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-primary" />
            <div>
              <h2 className="font-semibold">Total Schedules</h2>
              <p className="text-2xl font-bold">
                {schedulesLoading ? "..." : schedules?.length || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Articles Card */}
        <div className="p-6 rounded-xl border bg-card">
          <div className="flex items-center gap-4">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <h2 className="font-semibold">Published Articles</h2>
              <p className="text-2xl font-bold">
                {articlesLoading ? "..." : articles?.length || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Alerts Card */}
        <div className="p-6 rounded-xl border bg-card">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
            <div>
              <h2 className="font-semibold">Active Alerts</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <div className="rounded-xl border bg-card overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">Latest Updates</h3>
          </div>
          <div className="divide-y">
            {schedules?.slice(0, 5).map(schedule => (
              <div key={schedule.id} className="p-4">
                <p className="font-medium">{schedule.ship_name}</p>
                <p className="text-sm text-muted-foreground">{schedule.route}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 