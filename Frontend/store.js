import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import journalReducer from './features/journalSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer,
    journal: journalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})