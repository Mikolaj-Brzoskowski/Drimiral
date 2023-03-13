import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import journalReducer from './features/journalSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    journal: journalReducer,
  },
})