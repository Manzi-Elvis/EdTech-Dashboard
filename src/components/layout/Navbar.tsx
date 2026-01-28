import { Menu } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

interface Props {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: Props) {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("authUser")
    navigate("/")
  }

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      <button
        className="md:hidden"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu />
      </button>

      <div className="font-medium text-sm">
        {user?.role.toUpperCase()} PANEL
      </div>

      <button
        onClick={handleLogout}
        className="text-sm text-red-600 hover:underline"
      >
        Logout
      </button>
    </header>
  )
}