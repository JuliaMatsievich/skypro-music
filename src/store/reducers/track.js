import {
  ALL_TRACKS,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
  PAUSE_TRACK,
  PLAY_TRACK,
} from '../actions/types/types'

const initialState = {
  allTracks: [],
  currentTrack: {},
  isPlaying: false,
}

export const trackReducer = (state = initialState, action) => {
  console.log('trackReducer, state ---', state)
  console.log('trackReducer, action.payload ---', action)

  switch (action.type) {
    case ALL_TRACKS:
      return {
        ...state,
        allTracks: action.payload,
      }

    case SET_CURRENT_TRACK:
      const { track, index } = action.payload
      return {
        ...state,
        currentTrack: track,
        currentIndex: index,
      }

    case PLAY_TRACK:
      return {
        ...state,
        isPlaying: true,
      }

    case PAUSE_TRACK:
      return {
        ...state,
        isPlaying: false,
      }

    case NEXT_TRACK:
      const nextIndex = state.currentIndex + 1
      return {
        ...state,
        currentIndex: nextIndex,
        currentTrack: state.allTracks[nextIndex],
      }

    case PREV_TRACK:
      const prevIndex = state.currentIndex - 1
      return {
        ...state,
        currentIndex: prevIndex,
        currentTrack: state.allTracks[prevIndex],
      }

    default:
      return state
  }
}
