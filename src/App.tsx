import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { loginSuccess } from "./features/auth/authSlice"


export default function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser")
    if (storedUser) {
      dispatch(loginSuccess(JSON.parse(storedUser)))
    }
  }, [])
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}