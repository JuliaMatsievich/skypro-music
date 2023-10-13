import { configureStore } from '@reduxjs/toolkit'
import  trackReducer  from './trackSlice'
import { trackApi } from '../services/trackApi'

export const store = configureStore({
  reducer: {
    audioPlayer: trackReducer,
    [trackApi.reducerPath]: trackApi.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(trackApi.middleware)
})
