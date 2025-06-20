import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Estado de autenticación a almacenar en Redux
interface AuthState {
  token: string | null
  refresh_token: string | null
}

const initialState: AuthState = {
  token: null,
  refresh_token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Guarda los tokens proporcionados por el backend
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; refresh_token: string }>
    ) => {
      state.token = action.payload.token
      state.refresh_token = action.payload.refresh_token
    },
    // Limpia la información de sesión
    logout: (state) => {
      state.token = null
      state.refresh_token = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
