import { type UserRole } from "../features/auth/authSlice"

export interface NavItem {
  label: string
  path: string
  roles: UserRole[]
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    roles: ["admin", "teacher", "student"],
  },
  {
    label: "Students",
    path: "/students",
    roles: ["admin", "teacher"],
  },
  {
    label: "Classes",
    path: "/classes",
    roles: ["admin", "teacher"],
  },
  {
    label: "Analytics",
    path: "/analytics",
    roles: ["admin", "teacher"],
  },
  {
    label: "Settings",
    path: "/settings",
    roles: ["admin", "teacher", "student"],
  },
]