import { NavLink } from "react-router-dom"
import { navItems } from "../../utils/navigation"
import { useAppSelector } from "../../app/hooks"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: Props) {
  const { user } = useAppSelector((state) => state.auth)

  if (!user) return null

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed z-50 md:static top-0 left-0 h-full w-64 bg-white border-r
          transform transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-4 font-bold text-lg border-b">
          EdTech Dashboard
        </div>

        <nav className="p-4 space-y-2">
          {navItems
            .filter((item) => item.roles.includes(user.role))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm
                   ${
                     isActive
                       ? "bg-blue-600 text-white"
                       : "text-gray-700 hover:bg-gray-100"
                   }`
                }
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            ))}
        </nav>
      </aside>
    </>
  )
}