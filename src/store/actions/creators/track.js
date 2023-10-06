import {
  ALL_TRACKS,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
} from '../types/types'

export const getAllTracks = (tracks) => {
  return {
    type: ALL_TRACKS,
    payload: { tracks },
  }
}

// export const setCurrentTrack = (track) => {
// 	return {
// 		type: SET_CURRENT_TRACK,
// 		payload: {track}
// 	}
// }
