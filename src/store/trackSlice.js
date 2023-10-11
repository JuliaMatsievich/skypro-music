import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice ({
	name: 'track',
	initialState:  {
		allTracks: [],
		currentTrack: {},
		isPlaying: false,
		isShuffled: false,
		shuffledTracks: [],
		isLoop: false,
	 },
	reducers: {
		setAllTracks: (state,action) => {
			state.allTracks = action.payload
		}
	}
})

export const {setAllTracks} = trackSlice.actions

export default trackSlice.reducer

export const allTracksSelector = state => state.audioPlayer.allTracks