import { configureStore } from '@reduxjs/toolkit'
import  trackReducer  from './trackSlice'
import { trackApi } from '../services/trackApi'
import tokenReducer from './tokenSlice'
import { userReducer } from './userSlice'


export const store = configureStore({
  reducer: {
    audioPlayer: trackReducer,
    token : tokenReducer,
    user: userReducer,
    [trackApi.reducerPath]: trackApi.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(trackApi.middleware)
})
