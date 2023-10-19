import { configureStore } from '@reduxjs/toolkit'
import  trackReducer  from './trackSlice'
import { trackApi } from '../services/trackApi'
import tokenReducer from './tokenSlice'
import { userApi } from '../services/userApi'

export const store = configureStore({
  reducer: {
    audioPlayer: trackReducer,
    token : tokenReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(trackApi.middleware)
})
