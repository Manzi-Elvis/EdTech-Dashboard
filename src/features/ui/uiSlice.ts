import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UIState {
  sidebarOpen: boolean
  toastMessage: string | null
}

const initialState: UIState = {
  sidebarOpen: false,
  toastMessage: null,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    setToast(state, action: PayloadAction<string | null>) {
      state.toastMessage = action.payload
    },
  },
})

export const { toggleSidebar, setToast } = uiSlice.actions
export default uiSlice.reducer