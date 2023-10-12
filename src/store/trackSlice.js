import { createSlice } from '@reduxjs/toolkit'
import { sortArray } from '../helpFunctions'

export const trackSlice = createSlice({
  name: 'track',
  initialState: {
    allTracks: [],
    currentTrack: {},
    isPlaying: false,
    isShuffled: false,
    shuffledTracks: [],
    isLoop: false,
  },
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload
    },
    setCurrentTrack: (state, action) => {
      const { track, index } = action.payload;
		state.currentTrack = track;
		state.currentIndex = index
    },
    setPlayTrack: (state) => {
		state.isPlaying =  true
	 },
    setPauseTrack: (state) => {
		state.isPlaying = false
	 },
    setNextTrack: (state) => {
		let nextIndex = state.currentIndex + 1
      if(nextIndex > state.allTracks.length-1 && !state.isShuffled) {
      //   nextIndex = 0
			return state
      }
      if (state.isShuffled) {
			state.currentIndex = nextIndex;
			state.currentTrack = state.shuffledTracks[nextIndex]
      } else {
			state.currentIndex = nextIndex;
			state.currentTrack = state.allTracks[nextIndex]        
      }
	 },
    setPrevTrack: (state) => {
		let prevIndex = state.currentIndex - 1
      if (prevIndex < 0 && !state.isShuffled) {
        // prevIndex = state.allTracks.length-1
        return state
      }
      if (state.isShuffled) {
			state.currentIndex = prevIndex;
			state.currentTrack = state.shuffledTracks[prevIndex]
      } else {
			state.currentIndex = prevIndex;
			state.currentTrack = state.allTracks[prevIndex]
      }
	 },
    setShuffledTracks: (state) => {
		if (!state.isShuffled) {
			const shuffledTracks = sortArray([...state.allTracks])
			state.isShuffled = true
			state.shuffledTracks = shuffledTracks
		 } else {
			state.isShuffled = false
			state.allTracks = state.allTracks
		 }
	 },
    setLoopTrack: (state) => {
		state.isLoop = !state.isLoop
	 },
  },
})

export const {
  setAllTracks,
  setCurrentTrack,
  setPlayTrack,
  setPauseTrack,
  setNextTrack,
  setPrevTrack,
  setShuffledTracks,
  setLoopTrack,
} = trackSlice.actions

export default trackSlice.reducer

export const allTracksSelector = (state) => state.audioPlayer.allTracks
export const currentTrackSelector = (state) => state.audioPlayer.currentTrack
export const selectIsPlaying = (state) => state.audioPlayer.isPlaying
export const currentTrackIndexSelector = (state) =>
  state.audioPlayer.currentTrack.id
export const isShuffledTrackSelector = (state) => state.audioPlayer.isShuffled
export const isLoopTrackSelector = (state) => state.audioPlayer.isLoop
