import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/api"

interface DashboardState {
  totalStudents: number
  totalClasses: number
  averageGrade: number
  loading: boolean
  error: string | null
}

const initialState: DashboardState = {
  totalStudents: 0,
  totalClasses: 0,
  averageGrade: 0,
  loading: false,
  error: null,
}

export const fetchDashboardStats = createAsyncThunk(
  "dashboard/fetchStats",
  async () => {
    const [studentsRes, classesRes, analyticsRes] = await Promise.all([
      api.get("/students"),
      api.get("/classes"),
      api.get("/analytics/performance"),
    ])

    return {
      totalStudents: studentsRes.data.length,
      totalClasses: classesRes.data.length,
      averageGrade: analyticsRes.data.averageGrade,
    }
  }
)

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false
        state.totalStudents = action.payload.totalStudents
        state.totalClasses = action.payload.totalClasses
        state.averageGrade = action.payload.averageGrade
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch stats"
      })
  },
})

export default dashboardSlice.reducer