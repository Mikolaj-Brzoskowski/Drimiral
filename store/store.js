import { configureStore } from '@reduxjs/toolkit'
import journalReducer from '../features/journalSlice'
import logger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, journalReducer)

export const store = configureStore({
  reducer: {
    journal: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
})

export const persistor = persistStore(store)