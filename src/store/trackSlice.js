import { createSlice } from '@reduxjs/toolkit'
import { sortArray } from '../helpFunctions'
import { favorite } from '../fakePlaylist';


export const trackSlice = createSlice({
  name: 'track',
  initialState: {
    allTracks: [],
    currentTrack: {},
    isPlaying: false,
    isShuffled: false,
    shuffledTracks: [],
    isLoop: false,
    currentPlaylist: [],
    titlePlayList: 'Треки',
    favoritePlaylist: []
  },
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload
      state.titlePlayList = 'Треки'
      state.currentPlaylist = action.payload
    },

    setCurrentTrack: (state, action) => {
      const { track, index } = action.payload;
		state.currentTrack = track
		state.currentIndex = index
    },

    setPlayTrack: (state) => {
		state.isPlaying =  true
	 },

    setPauseTrack: (state) => {
		state.isPlaying = false
	 },

    setNextTrack: (state) => {
		const nextIndex = (state.isShuffled)
		? state.shuffledTracks.findIndex(el => el.id === state.currentTrack.id) + 1
		:  state.currentIndex + 1
      if(nextIndex > state.currentPlaylist.length-1 && !state.isShuffled) {
      //   nextIndex = 0
			return state
      }
		state.currentIndex = nextIndex;
		state.currentTrack = (state.isShuffled)
		? state.shuffledTracks[nextIndex]
		: state.currentPlaylist[nextIndex]
	 },

    setPrevTrack: (state) => {
		const prevIndex = (state.isShuffled) 
		? state.shuffledTracks.findIndex(el => el.id === state.currentTrack.id) - 1 
		: state.currentIndex - 1
      if (prevIndex < 0 && !state.isShuffled) {
        // prevIndex = state.allTracks.length-1
        return state
      }
		state.currentIndex = prevIndex;
		state.currentTrack = (state.isShuffled)
		? state.shuffledTracks[prevIndex]
		: state.currentPlaylist[prevIndex]

	 },

    setShuffledTracks: (state) => {
		if (!state.isShuffled) {
			const shuffledTracks = sortArray([...state.currentPlaylist])
			state.isShuffled = true
			state.shuffledTracks = shuffledTracks
		 } else {
			state.isShuffled = false
			state.shuffledTracks = []
			state.currentIndex = state.currentPlaylist.findIndex(el => el.id === state.currentTrack.id)
		 }
	 },

    setLoopTrack: (state) => {
		state.isLoop = !state.isLoop
	 },

   setFavoritePlaylist: (state,action) => {
    state.titlePlayList = 'Мои треки'
    state.currentPlaylist = action.payload
    state.favoritePlaylist = action.payload
   }
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
  setFavoritePlaylist
} = trackSlice.actions

export default trackSlice.reducer

export const allTracksSelector = (state) => state.audioPlayer.allTracks
export const currentTrackSelector = (state) => state.audioPlayer.currentTrack
export const selectIsPlaying = (state) => state.audioPlayer.isPlaying
export const currentTrackIndexSelector = (state) =>
  state.audioPlayer.currentTrack.id
export const isShuffledTrackSelector = (state) => state.audioPlayer.isShuffled
export const isLoopTrackSelector = (state) => state.audioPlayer.isLoop
export const titlePlayListSelector = (state) => state.audioPlayer.titlePlayList
export const currentPlaylistSelector = (state) => state.audioPlayer.currentPlaylist
