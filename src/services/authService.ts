import { type UserRole } from "../features/auth/authSlice"

interface LoginPayload {
  email: string
  password: string
  role: UserRole
}

export const mockLogin = (data: LoginPayload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password === "password") {
        resolve({
          id: "1",
          name: "Demo User",
          email: data.email,
          role: data.role,
        })
      } else {
        reject("Invalid email or password")
      }
    }, 1000)
  })
}