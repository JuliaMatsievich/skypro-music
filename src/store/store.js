import { configureStore } from '@reduxjs/toolkit'
// import { trackReducer } from './reducers/track'
import  trackReducer  from './trackSlice'

export const store = configureStore({
  reducer: {
    audioPlayer: trackReducer
  },
})
