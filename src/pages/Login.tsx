import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  loginStart,
  loginSuccess,
  loginFailure,
  type UserRole,
} from "../features/auth/authSlice"
import { mockLogin } from "../services/authService"

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<UserRole>("student")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginStart())

    try {
      const user = (await mockLogin({ email, password, role })) as any
      dispatch(loginSuccess(user))
      localStorage.setItem("authUser", JSON.stringify(user))
      navigate("/dashboard")
    } catch (err) {
      dispatch(loginFailure(err as string))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          EdTech Dashboard Login
        </h1>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full mb-4 p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
        >
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isLoading ? "Signing in..." : "Login"}
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Demo password: <strong>password</strong>
        </p>
      </form>
    </div>
  )
}