import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import AppLayout from "../components/layout/AppLayout"

export default function Dashboard() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  return (
      <AppLayout>
            <div className="p-6">
                  <h1 className="text-2xl font-bold">Welcome, {user?.role.toUpperCase()}</h1>
            </div>
      </AppLayout>
    
  )
}