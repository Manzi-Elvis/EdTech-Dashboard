import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/api"
import type { Student } from "../../mock/students"

interface StudentsState {
  students: Student[]
  loading: boolean
  error: string | null
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
}

export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async () => {
    const response = await api.get("/students")
    return response.data as Student[]
  }
)

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload
        state.loading = false
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch"
      })
  },
})

export default studentsSlice.reducer