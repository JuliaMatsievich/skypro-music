import {
  ALL_TRACKS,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
  PAUSE_TRACK,
  PLAY_TRACK
} from '../types/types'

export const setAllTracks = (tracks) => {
  return {
    type: ALL_TRACKS,
    payload: tracks ,
  }
}

export const setCurrentTrack = (track) => {
  return {
    type: SET_CURRENT_TRACK,
    payload: track,
  }
}

export const setPlayTrack = () => {
  return {
    type: PLAY_TRACK,
  }
}

export const setPauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  }
}