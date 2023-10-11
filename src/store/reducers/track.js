import { sortArray } from '../../helpFunctions'
import {
  ALL_TRACKS,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  SHUFFLED_TRACKS,
  LOOP_TRACK,
} from '../actions/types/types'

const initialState = {
  allTracks: [],
  currentTrack: {},
  isPlaying: false,
  isShuffled: false,
  shuffledTracks: [],
  isLoop: false,
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

    case LOOP_TRACK:
      return {
        ...state,
        isLoop: !state.isLoop,
      }
    // !ToDo Добавить обработку конца и начала списка if
    case NEXT_TRACK:
      const nextIndex = state.currentIndex + 1
      if (state.isShuffled) {
        return {
          ...state,
          currentIndex: nextIndex,
          currentTrack: state.shuffledTracks[nextIndex],
        }
      } else {
        return {
          ...state,
          currentIndex: nextIndex,
          currentTrack: state.allTracks[nextIndex],
        }
      }

    case PREV_TRACK:
      const prevIndex = state.currentIndex - 1
      if (state.isShuffled) {
        return {
          ...state,
          currentIndex: prevIndex,
          currentTrack: state.shuffledTracks[prevIndex],
        }
      } else {
        return {
          ...state,
          currentIndex: prevIndex,
          currentTrack: state.allTracks[prevIndex],
        }
      }

    case SHUFFLED_TRACKS:
      if (!state.isShuffled) {
        const shuffledTracks = sortArray([...state.allTracks])
        return {
          ...state,
          isShuffled: true,
          shuffledTracks,
        }
      } else {
        return {
          ...state,
          isShuffled: false,
          allTracks: state.allTracks,
        }
      }

    default:
      return state
  }
}
