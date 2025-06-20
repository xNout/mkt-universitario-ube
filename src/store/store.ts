import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import authReducer from './authSlice'

// Configuración de persistencia utilizando localStorage
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: authReducer,
})

// Reducer combinado con persistencia
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// Creación del store de Redux
export const store = configureStore({
  reducer: persistedReducer,
})

// Instancia que controla la rehidratación del estado
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
