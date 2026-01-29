import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchDashboardStats } from "../features/dashboard/dashboardSlice"
import AppLayout from "../components/layout/AppLayout"
import StatsCard from "../components/common/StatsCard"
import { type UserRole } from "../features/auth/authSlice"

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const { totalStudents, totalClasses, averageGrade, loading } =
    useAppSelector((state) => state.dashboard)

  useEffect(() => {
    if (user?.role !== "student") {
      dispatch(fetchDashboardStats())
    }
  }, [dispatch, user?.role])

  const role = user?.role as UserRole

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {loading && <p>Loading stats...</p>}

      {/* Admin & Teacher Stats */}
      {role !== "student" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <StatsCard title="Total Students" value={totalStudents} />
          <StatsCard title="Total Classes" value={totalClasses} color="bg-green-600" />
          <StatsCard title="Average Grade" value={averageGrade} color="bg-purple-600" />
        </div>
      )}

      {/* Student view */}
      {role === "student" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <StatsCard title="Your Average Grade" value={85} />
          <StatsCard title="Attendance" value="92%" color="bg-green-600" />
          <StatsCard title="Next Class" value="Math 101 - Mon 9am" color="bg-purple-600" />
        </div>
      )}

      {/* Future: add charts, class overview, etc. */}
      <div className="mt-6">
        <p>More analytics and charts coming soon...</p>
      </div>
    </AppLayout>
  )
}