import {ALL_TRACKS, SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SHUFFLED } from '../actions/types/types'

const initialState = {
	allTracks: [],
	currentTrack: {}
}

export const trackReducer = (state = initialState, action)  => {
	console.log('trackReducer, state ---', state );
	console.log('trackReducer, action.payload ---', action.payload );

	switch (action.type) {

		case ALL_TRACKS: 
		return {
			...state,
			allTracks: action.payload
		}

		case SET_CURRENT_TRACK: 
			return {
				...state,
				currentTrack: action.payload
			}
		
		default: 
			return state		
	}
}