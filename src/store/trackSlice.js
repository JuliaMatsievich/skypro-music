import { createSlice } from '@reduxjs/toolkit'
import { sortArray } from '../helpers/sortFunc'

export const trackSlice = createSlice({
  name: 'track',
  initialState: {
    currentTrack: {},
    isPlaying: false,
    isShuffled: false,
    shuffledTracks: [],
    isLoop: false,
    currentPlaylist: [],
    favoritePlaylist: [],
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      const { track, index } = action.payload
      state.currentTrack = track
      state.currentIndex = index
    },

    setPlayTrack: (state) => {
      state.isPlaying = true
    },

    setPauseTrack: (state) => {
      state.isPlaying = false
    },

    setNextTrack: (state) => {
      let nextIndex = state.isShuffled
        ? state.shuffledTracks.findIndex(
            (el) => el.id === state.currentTrack.id,
          ) + 1
        : state.currentIndex + 1
        console.log('nextIndex', nextIndex);
      if (nextIndex > state.currentPlaylist.length - 1 && !state.isShuffled) {
        return state
      }
      if (nextIndex > state.currentPlaylist.length - 1 && state.isShuffled) {
        nextIndex = 0
      }
      state.currentIndex = nextIndex
      state.currentTrack = state.isShuffled
        ? state.shuffledTracks[nextIndex]
        : state.currentPlaylist[nextIndex]
    },

    setPrevTrack: (state) => {
      let prevIndex = state.isShuffled
        ? state.shuffledTracks.findIndex(
            (el) => el.id === state.currentTrack.id,
          ) - 1
        : state.currentIndex - 1
      if (prevIndex < 0 && !state.isShuffled) {
        return state
      }
      if (prevIndex < 0 && state.isShuffled) {
        prevIndex = state.currentPlaylist.length-1
      }

      state.currentIndex = prevIndex
      state.currentTrack = state.isShuffled
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
        state.currentIndex = state.currentPlaylist.findIndex(
          (el) => el.id === state.currentTrack.id,
        )
      }
    },

    setLoopTrack: (state) => {
      state.isLoop = !state.isLoop
    },

    setFavoritePlaylist: (state, action) => {
      state.favoritePlaylist = action.payload
    },

    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload
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
  setCurrentPlaylist,
  setFavoritePlaylist,
} = trackSlice.actions

export default trackSlice.reducer

export const currentTrackSelector = (state) => state.audioPlayer.currentTrack
export const selectIsPlaying = (state) => state.audioPlayer.isPlaying
export const currentTrackIndexSelector = (state) =>
  state.audioPlayer.currentTrack.id
export const isShuffledTrackSelector = (state) => state.audioPlayer.isShuffled
export const isLoopTrackSelector = (state) => state.audioPlayer.isLoop
export const favoritePlaylistSelector = (state) =>
  state.audioPlayer.favoritePlaylist
