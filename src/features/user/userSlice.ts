import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  id: string | null
  name: string | null
  email: string | null
  role: string | null
  preferences: {
    theme: "light" | "dark"
  }
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  role: null,
  preferences: {
    theme: "light",
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload)
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.preferences.theme = action.payload
    },
    clearUser(state) {
      state.id = null
      state.name = null
      state.email = null
      state.role = null
      state.preferences.theme = "light"
    },
  },
})

export const { setUser, setTheme, clearUser } = userSlice.actions
export default userSlice.reducer